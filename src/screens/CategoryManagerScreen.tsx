import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, GripVertical, ShoppingCart, Home, Coffee, Car, DollarSign, TrendingUp } from 'lucide-react-native';

const CategoryManagerScreen = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState<'Expense' | 'Income'>('Expense');

  const categories = {
    Expense: [
      { id: '1', name: 'Grocery', icon: <ShoppingCart size={20} color="#FFFFFF" />, color: '#F87171' },
      { id: '2', name: 'Rent', icon: <Home size={20} color="#FFFFFF" />, color: '#60A5FA' },
      { id: '3', name: 'Dining Out', icon: <Coffee size={20} color="#FFFFFF" />, color: '#FBBF24' },
      { id: '4', name: 'Transport', icon: <Car size={20} color="#FFFFFF" />, color: '#34D399' },
    ],
    Income: [
      { id: '5', name: 'Salary', icon: <DollarSign size={20} color="#FFFFFF" />, color: '#10B981' },
      { id: '6', name: 'Investments', icon: <TrendingUp size={20} color="#FFFFFF" />, color: '#8B5CF6' },
    ]
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.title}>Categories</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Expense' && styles.activeTab]} 
          onPress={() => setActiveTab('Expense')}
        >
          <Text style={[styles.tabText, activeTab === 'Expense' && styles.activeTabText]}>Expense</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Income' && styles.activeTab]} 
          onPress={() => setActiveTab('Income')}
        >
          <Text style={[styles.tabText, activeTab === 'Income' && styles.activeTabText]}>Income</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={categories[activeTab]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
              {item.icon}
            </View>
            <Text style={styles.categoryName}>{item.name}</Text>
            <TouchableOpacity style={styles.dragHandle}>
              <GripVertical size={20} color="#94A3B8" />
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#008080',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#94A3B8',
  },
  activeTabText: {
    color: '#008080',
  },
  listContent: {
    paddingHorizontal: 20,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  categoryName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#1E293B',
  },
  dragHandle: {
    padding: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#F1F5F9',
  },
});

export default CategoryManagerScreen;
