import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Wallet, Plus, ShoppingCart, Home, DollarSign, Target } from 'lucide-react-native';
import FinCard from '../components/FinCard';

const DashboardScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>$2,500.00</Text>
          <View style={styles.chartPreview}>
            {/* Minimalist line chart preview placeholder */}
            <View style={styles.chartLine} />
          </View>
        </View>

        <View style={styles.mainContent}>
          <FinCard style={styles.spendingCard}>
            <Text style={styles.cardTitle}>Monthly Spending vs. Budget</Text>
            <View style={styles.donutContainer}>
              <View style={styles.donutPlaceholder}>
                <Text style={styles.donutText}>$20.00</Text>
                <Text style={styles.donutSubtext}>Balance</Text>
              </View>
            </View>
          </FinCard>

          <TouchableOpacity 
            style={styles.goalsCard}
            onPress={() => navigation.navigate('SavingsGoals')}
          >
            <View style={styles.goalsIconContainer}>
              <Target size={24} color="#008080" />
            </View>
            <View style={styles.goalsInfo}>
              <Text style={styles.goalsTitle}>Savings Goals</Text>
              <Text style={styles.goalsSubtitle}>4 active goals</Text>
            </View>
            <View style={styles.goalsProgress}>
              <Text style={styles.goalsValue}>65%</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Transactions')}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.transactionList}>
            <TransactionItem 
              title="Grocery" 
              category="Food" 
              amount="- $120.50" 
              type="Expense" 
              icon={<ShoppingCart size={20} color="#008080" />}
            />
            <TransactionItem 
              title="Rent" 
              category="Housing" 
              amount="- $1,200.00" 
              type="Expense" 
              icon={<Home size={20} color="#008080" />}
            />
            <TransactionItem 
              title="Salary" 
              category="Income" 
              amount="+ $4,000.00" 
              type="Income" 
              icon={<DollarSign size={20} color="#008080" />}
            />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={styles.fab}
        onPress={() => navigation.navigate('AddTransaction')}
        testID="add-transaction-fab"
      >
        <Plus color="white" size={32} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const TransactionItem = ({ title, category, amount, type, icon }: any) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionIconContainer}>
      {icon}
    </View>
    <View style={styles.transactionDetails}>
      <Text style={styles.transactionTitle}>{title}</Text>
      <Text style={styles.transactionCategory}>{category}</Text>
    </View>
    <Text style={[
      styles.transactionAmount, 
      type === 'Income' ? styles.incomeText : styles.expenseText
    ]}>
      {amount}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    backgroundColor: '#1E293B',
    padding: 32,
    paddingTop: 48,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    alignItems: 'center',
  },
  balanceLabel: {
    color: '#94A3B8',
    fontSize: 14,
    fontWeight: '500',
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 8,
  },
  chartPreview: {
    marginTop: 24,
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
    padding: 24,
    marginTop: -24,
  },
  spendingCard: {
    alignItems: 'center',
  },
  goalsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  goalsIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  goalsInfo: {
    flex: 1,
  },
  goalsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  goalsSubtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  goalsProgress: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008080',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
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
    borderColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  donutText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  donutSubtext: {
    fontSize: 12,
    color: '#64748B',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  seeAllText: {
    color: '#008080',
    fontWeight: '600',
  },
  transactionList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 8,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  transactionIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  transactionCategory: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  incomeText: {
    color: '#10B981',
  },
  expenseText: {
    color: '#EF4444',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#008080',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

export default DashboardScreen;
