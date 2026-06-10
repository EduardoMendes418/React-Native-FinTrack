import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowUpCircle, ArrowDownCircle, Wallet } from 'lucide-react-native';
import FinCard from '../components/FinCard';
import { COLORS, SPACING, BORDER_RADIUS } from '../theme';
import { getMetrics, FinancialMetrics } from '../services/financeStorage';

const AnalyticsScreen = () => {
  const [metrics, setMetrics] = useState<FinancialMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      const data = await getMetrics();
      setMetrics(data);
      setLoading(false);
    };
    fetchMetrics();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Finance Metrics</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.summaryRow}>
          <MetricSummaryCard 
            label="Income" 
            amount={`$${metrics?.totalIncome.toFixed(2) || '0.00'}`} 
            icon={<ArrowUpCircle size={24} color={COLORS.success} />}
            color={COLORS.success}
          />
          <MetricSummaryCard 
            label="Expenses" 
            amount={`$${metrics?.totalExpenses.toFixed(2) || '0.00'}`} 
            icon={<ArrowDownCircle size={24} color={COLORS.error} />}
            color={COLORS.error}
          />
        </View>

        <FinCard style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Wallet size={24} color={COLORS.primary} />
            <Text style={styles.balanceLabel}>Net Balance</Text>
          </View>
          <Text style={[
            styles.balanceAmount, 
            (metrics?.balance || 0) >= 0 ? styles.positive : styles.negative
          ]}>
            ${metrics?.balance.toFixed(2) || '0.00'}
          </Text>
        </FinCard>

        <Text style={styles.sectionTitle}>Expense Breakdown</Text>
        <FinCard style={styles.breakdownCard}>
          {metrics && Object.keys(metrics.categoryBreakdown).length > 0 ? (
            Object.entries(metrics.categoryBreakdown).map(([category, amount]) => (
              <BreakdownItem 
                key={category} 
                label={category} 
                amount={amount} 
                total={metrics.totalExpenses} 
              />
            ))
          ) : (
            <Text style={styles.emptyText}>No expense data available</Text>
          )}
        </FinCard>
      </ScrollView>
    </SafeAreaView>
  );
};

const MetricSummaryCard = ({ label, amount, icon, color }: any) => (
  <FinCard style={styles.summaryCard}>
    <View style={styles.summaryIcon}>{icon}</View>
    <Text style={styles.summaryLabel}>{label}</Text>
    <Text style={[styles.summaryAmount, { color }]}>{amount}</Text>
  </FinCard>
);

const BreakdownItem = ({ label, amount, total }: any) => {
  const percentage = total > 0 ? ((amount / total) * 100).toFixed(1) : '0';
  return (
    <View style={styles.breakdownItem}>
      <View style={styles.breakdownInfo}>
        <Text style={styles.breakdownLabel}>{label}</Text>
        <Text style={styles.breakdownAmount}>${amount.toFixed(2)}</Text>
      </View>
      <View style={styles.progressBg}>
        <View style={[styles.progressFill, { width: `${percentage}%` }]} />
      </View>
      <Text style={styles.percentageText}>{percentage}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: SPACING.lg,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  scrollContent: {
    padding: SPACING.lg,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },
  summaryCard: {
    flex: 0.48,
    alignItems: 'center',
    padding: SPACING.md,
  },
  summaryIcon: {
    marginBottom: SPACING.sm,
  },
  summaryLabel: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 4,
  },
  summaryAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  balanceCard: {
    alignItems: 'center',
    padding: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  balanceLabel: {
    fontSize: 16,
    color: COLORS.text,
    marginLeft: SPACING.sm,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  positive: {
    color: COLORS.success,
  },
  negative: {
    color: COLORS.error,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: SPACING.md,
  },
  breakdownCard: {
    padding: SPACING.md,
  },
  breakdownItem: {
    marginBottom: SPACING.md,
  },
  breakdownInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  breakdownLabel: {
    fontSize: 16,
    color: COLORS.secondary,
    fontWeight: '500',
  },
  breakdownAmount: {
    fontSize: 14,
    color: COLORS.text,
  },
  progressBg: {
    height: 8,
    backgroundColor: COLORS.lightGray,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  percentageText: {
    fontSize: 12,
    color: COLORS.muted,
    textAlign: 'right',
    marginTop: 4,
  },
  emptyText: {
    textAlign: 'center',
    color: COLORS.muted,
    padding: SPACING.lg,
  },
});

export default AnalyticsScreen;
