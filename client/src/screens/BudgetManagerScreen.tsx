import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ShoppingCart, Home, Coffee, Car } from 'lucide-react-native';
import Button from '../components/Button';

const BudgetManagerScreen = () => {
  const budgets = [
    { id: '1', category: 'Grocery', icon: <ShoppingCart size={20} color="#008080" />, spent: 320, limit: 500, progress: 0.64 },
    { id: '2', category: 'Rent', icon: <Home size={20} color="#008080" />, spent: 1200, limit: 1200, progress: 1.0 },
    { id: '3', category: 'Dining Out', icon: <Coffee size={20} color="#008080" />, spent: 150, limit: 300, progress: 0.5 },
    { id: '4', category: 'Transport', icon: <Car size={20} color="#008080" />, spent: 80, limit: 200, progress: 0.4 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Budget Manager</Text>
      </View>

      <FlatList 
        data={budgets}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.budgetItem}>
            <View style={styles.itemHeader}>
              <View style={styles.categoryInfo}>
                <View style={styles.iconContainer}>{item.icon}</View>
                <Text style={styles.categoryName}>{item.category}</Text>
              </View>
              <Text style={styles.amountText}>${item.spent.toFixed(2)}</Text>
            </View>
            
            <View style={styles.progressContainer}>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: `${item.progress * 100}%` }]} />
              </View>
              <View style={styles.progressInfo}>
                <Text style={styles.progressText}>{Math.round(item.progress * 100)}% spent</Text>
                <Text style={styles.limitText}>Limit: ${item.limit}</Text>
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.footer}>
        <Button 
          title="Setting" 
          onPress={() => {}}
          testID="budget-settings-button"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  listContent: {
    padding: 24,
  },
  budgetItem: {
    marginBottom: 24,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  amountText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E293B',
  },
  progressContainer: {
    width: '100%',
  },
  progressBarBackground: {
    height: 12,
    backgroundColor: '#E2E8F0',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#008080',
    borderRadius: 6,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  progressText: {
    fontSize: 12,
    color: '#64748B',
  },
  limitText: {
    fontSize: 12,
    color: '#64748B',
  },
  footer: {
    padding: 24,
    paddingBottom: 40,
  },
});

export default BudgetManagerScreen;
