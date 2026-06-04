import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Filter, ShoppingCart, Home, DollarSign, Edit2, Trash2 } from 'lucide-react-native';

const TransactionsScreen = () => {
  const transactions = [
    { id: '1', title: 'Grocery', category: 'Food', amount: '- $120.50', status: 'Active', date: '2026-06-01' },
    { id: '2', title: 'Rent', category: 'Housing', amount: '- $1,200.00', status: 'Active', date: '2026-06-01' },
    { id: '3', title: 'Salary', category: 'Income', amount: '+ $4,000.00', status: 'Active', date: '2026-05-31' },
    { id: '4', title: 'Gym', category: 'Health', amount: '- $50.00', status: 'Inactive', date: '2026-05-30' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
        
        <View style={styles.searchContainer}>
          <Search size={20} color="#94A3B8" />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search transactions..."
            placeholderTextColor="#94A3B8"
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
          <FilterBadge label="Category" />
          <FilterBadge label="Date" />
          <FilterBadge label="Amount" />
          <FilterBadge label="Type" />
        </ScrollView>
      </View>

      <FlatList 
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionRow}>
            <View style={styles.iconContainer}>
              {item.title === 'Salary' ? <DollarSign size={20} color="#008080" /> : 
               item.title === 'Rent' ? <Home size={20} color="#008080" /> : 
               <ShoppingCart size={20} color="#008080" />}
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDate}>{item.date}</Text>
            </View>
            <View style={styles.statusContainer}>
              <View style={[
                styles.statusBadge, 
                item.status === 'Active' ? styles.activeBadge : styles.inactiveBadge
              ]}>
                <Text style={[
                  styles.statusText,
                  item.status === 'Active' ? styles.activeText : styles.inactiveText
                ]}>
                  {item.status}
                </Text>
              </View>
            </View>
            <View style={styles.actionsContainer}>
              <TouchableOpacity style={styles.actionButton}>
                <Edit2 size={16} color="#64748B" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Trash2 size={16} color="#EF4444" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const FilterBadge = ({ label }: { label: string }) => (
  <View style={styles.filterBadge}>
    <Text style={styles.filterText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#1E293B',
  },
  filtersContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  filterBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F1F5F9',
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  filterText: {
    color: '#64748B',
    fontSize: 14,
    fontWeight: '500',
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  itemDate: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  statusContainer: {
    marginHorizontal: 12,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  activeBadge: {
    backgroundColor: '#D1FAE5',
  },
  inactiveBadge: {
    backgroundColor: '#F1F5F9',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  activeText: {
    color: '#065F46',
  },
  inactiveText: {
    color: '#64748B',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 4,
    marginLeft: 8,
  },
});

export default TransactionsScreen;
