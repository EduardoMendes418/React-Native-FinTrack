import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BarChart as LucideBarChart, PieChart as LucidePieChart } from 'lucide-react-native';
import FinCard from '../components/FinCard';

const { width } = Dimensions.get('window');

const AnalyticsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Analytics</Text>
        <View style={styles.tabSelector}>
          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabTextActive}>Monthly</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabInactive}>
            <Text style={styles.tabTextInactive}>Graphs</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Monthly Spending</Text>
        <FinCard style={styles.chartCard}>
          <View style={styles.barChartContainer}>
            <Bar height={120} label="Jan" />
            <Bar height={80} label="Feb" color="#38BDF8" />
            <Bar height={150} label="Mar" />
            <Bar height={100} label="Apr" color="#38BDF8" />
            <Bar height={140} label="May" />
            <Bar height={110} label="Jun" color="#38BDF8" />
          </View>
        </FinCard>

        <Text style={styles.sectionTitle}>Expense Breakdown</Text>
        <FinCard style={styles.pieCard}>
          <View style={styles.piePlaceholder}>
            <View style={styles.pieInner} />
          </View>
          <View style={styles.legendContainer}>
            <LegendItem color="#008080" label="Housing" percentage="45%" />
            <LegendItem color="#38BDF8" label="Food" percentage="25%" />
            <LegendItem color="#94A3B8" label="Transport" percentage="15%" />
            <LegendItem color="#E2E8F0" label="Other" percentage="15%" />
          </View>
        </FinCard>
      </ScrollView>
    </SafeAreaView>
  );
};

const Bar = ({ height, label, color = '#008080' }: { height: number, label: string, color?: string }) => (
  <View style={styles.barColumn}>
    <View style={[styles.bar, { height, backgroundColor: color }]} />
    <Text style={styles.barLabel}>{label}</Text>
  </View>
);

const LegendItem = ({ color, label, percentage }: { color: string, label: string, percentage: string }) => (
  <View style={styles.legendItem}>
    <View style={[styles.legendColor, { backgroundColor: color }]} />
    <Text style={styles.legendLabel}>{label}</Text>
    <Text style={styles.legendPercentage}>{percentage}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 20,
  },
  tabSelector: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    padding: 4,
  },
  tabActive: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabInactive: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  tabTextActive: {
    color: '#008080',
    fontWeight: 'bold',
  },
  tabTextInactive: {
    color: '#64748B',
    fontWeight: '500',
  },
  scrollContent: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 16,
  },
  chartCard: {
    paddingTop: 32,
    paddingBottom: 16,
    marginBottom: 32,
  },
  barChartContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 180,
    paddingHorizontal: 8,
  },
  barColumn: {
    alignItems: 'center',
  },
  bar: {
    width: 24,
    borderRadius: 6,
  },
  barLabel: {
    marginTop: 12,
    fontSize: 12,
    color: '#94A3B8',
  },
  pieCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  piePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 20,
    borderColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
  },
  pieInner: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
  },
  legendContainer: {
    flex: 1,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 3,
    marginRight: 8,
  },
  legendLabel: {
    flex: 1,
    fontSize: 14,
    color: '#64748B',
  },
  legendPercentage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E293B',
  },
});

export default AnalyticsScreen;
