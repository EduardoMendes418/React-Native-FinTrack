import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, ShoppingCart, Home, DollarSign, Target } from 'lucide-react-native';
import FinCard from '../components/FinCard';
import TransactionItem from '../components/TransactionItem';
import { COLORS, SPACING, BORDER_RADIUS } from '../theme';
import { getTransactions } from '../services/financeStorage';
import { Transaction } from '../types';

const DashboardScreen = ({ navigation }: any) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getTransactions();
      setTransactions(data.slice(0, 5)); // Show only recent
    };
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <BalanceHeader amount="$2,500.00" />

        <View style={styles.mainContent}>
          <MonthlySpendingCard balance="$20.00" />

          <SavingsGoalsButton 
            count={4} 
            progress="65%" 
            onPress={() => navigation.navigate('SavingsGoals')} 
          />

          <SectionHeader 
            title="Recent Transactions" 
            onActionPress={() => navigation.navigate('Transactions')} 
          />

          <View style={styles.transactionList}>
            {transactions.length > 0 ? (
              transactions.map(item => (
                <TransactionItem 
                  key={item.id}
                  title={item.title} 
                  category={item.categoryId} 
                  amount={`${item.type === 'Income' ? '+' : '-'} $${item.amount.toFixed(2)}`} 
                  type={item.type} 
                  icon={getIconForCategory(item.categoryId)}
                />
              ))
            ) : (
              <PlaceholderTransactions />
            )}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={styles.fab}
        onPress={() => navigation.navigate('AddTransaction')}
        testID="add-transaction-fab"
      >
        <Plus color={COLORS.white} size={32} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Sub-components for better readability
const BalanceHeader = ({ amount }: { amount: string }) => (
  <View style={styles.header}>
    <Text style={styles.balanceLabel}>Total Balance</Text>
    <Text style={styles.balanceAmount}>{amount}</Text>
    <View style={styles.chartPreview}>
      <View style={styles.chartLine} />
    </View>
  </View>
);

const MonthlySpendingCard = ({ balance }: { balance: string }) => (
  <FinCard style={styles.spendingCard}>
    <Text style={styles.cardTitle}>Monthly Spending vs. Budget</Text>
    <View style={styles.donutContainer}>
      <View style={styles.donutPlaceholder}>
        <Text style={styles.donutText}>{balance}</Text>
        <Text style={styles.donutSubtext}>Balance</Text>
      </View>
    </View>
  </FinCard>
);

const SavingsGoalsButton = ({ count, progress, onPress }: any) => (
  <TouchableOpacity style={styles.goalsCard} onPress={onPress}>
    <View style={styles.goalsIconContainer}>
      <Target size={24} color={COLORS.primary} />
    </View>
    <View style={styles.goalsInfo}>
      <Text style={styles.goalsTitle}>Savings Goals</Text>
      <Text style={styles.goalsSubtitle}>{count} active goals</Text>
    </View>
    <View style={styles.goalsProgress}>
      <Text style={styles.goalsValue}>{progress}</Text>
    </View>
  </TouchableOpacity>
);

const SectionHeader = ({ title, onActionPress }: any) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <TouchableOpacity onPress={onActionPress}>
      <Text style={styles.seeAllText}>See All</Text>
    </TouchableOpacity>
  </View>
);

const PlaceholderTransactions = () => (
  <>
    <TransactionItem 
      title="Grocery" 
      category="Food" 
      amount="- $120.50" 
      type="Expense" 
      icon={<ShoppingCart size={20} color={COLORS.primary} />}
    />
    <TransactionItem 
      title="Salary" 
      category="Income" 
      amount="+ $4,000.00" 
      type="Income" 
      icon={<DollarSign size={20} color={COLORS.primary} />}
    />
  </>
);

const getIconForCategory = (categoryId: string) => {
  // Simple mapper for now
  if (categoryId.toLowerCase().includes('food')) return <ShoppingCart size={20} color={COLORS.primary} />;
  if (categoryId.toLowerCase().includes('house')) return <Home size={20} color={COLORS.primary} />;
  return <DollarSign size={20} color={COLORS.primary} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    backgroundColor: COLORS.secondary,
    padding: SPACING.xl,
    paddingTop: SPACING.xxl,
    borderBottomLeftRadius: BORDER_RADIUS.xl,
    borderBottomRightRadius: BORDER_RADIUS.xl,
    alignItems: 'center',
  },
  balanceLabel: {
    color: COLORS.muted,
    fontSize: 14,
    fontWeight: '500',
  },
  balanceAmount: {
    color: COLORS.white,
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: SPACING.sm,
  },
  chartPreview: {
    marginTop: SPACING.lg,
    width: '100%',
    height: 40,
    justifyContent: 'center',
  },
  chartLine: {
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '100%',
  },
  mainContent: {
    padding: SPACING.lg,
    marginTop: -SPACING.lg,
  },
  spendingCard: {
    alignItems: 'center',
  },
  goalsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    marginTop: SPACING.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  goalsIconContainer: {
    width: 48,
    height: 48,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  goalsInfo: {
    flex: 1,
  },
  goalsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.secondary,
  },
  goalsSubtitle: {
    fontSize: 13,
    color: COLORS.text,
    marginTop: 2,
  },
  goalsProgress: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.secondary,
    marginBottom: 20,
  },
  donutContainer: {
    height: 180,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  donutPlaceholder: {
    height: 140,
    width: 140,
    borderRadius: 70,
    borderWidth: 15,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  donutText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  donutSubtext: {
    fontSize: 12,
    color: COLORS.text,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.xl,
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  seeAllText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  transactionList: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.sm,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

export default DashboardScreen;
