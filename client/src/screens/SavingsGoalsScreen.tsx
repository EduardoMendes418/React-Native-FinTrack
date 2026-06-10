import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Laptop, Plane, Car, Home } from 'lucide-react-native';

const SavingsGoalsScreen = ({ navigation }: any) => {
  const goals = [
    { 
      id: '1', 
      title: 'New Laptop', 
      targetAmount: 2500, 
      currentAmount: 1500, 
      deadline: 'Dec 2024', 
      icon: <Laptop size={24} color="#3B82F6" /> 
    },
    { 
      id: '2', 
      title: 'Vacation', 
      targetAmount: 5000, 
      currentAmount: 2000, 
      deadline: 'Aug 2024', 
      icon: <Plane size={24} color="#3B82F6" /> 
    },
    { 
      id: '3', 
      title: 'New Car', 
      targetAmount: 30000, 
      currentAmount: 5000, 
      deadline: 'June 2025', 
      icon: <Car size={24} color="#3B82F6" /> 
    },
    { 
      id: '4', 
      title: 'Emergency Fund', 
      targetAmount: 10000, 
      currentAmount: 8500, 
      deadline: 'Oct 2024', 
      icon: <Home size={24} color="#3B82F6" /> 
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.title}>Savings Goals</Text>
        <View style={{ width: 40 }} /> {/* Spacer for centering title */}
      </View>

      <FlatList 
        data={goals}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const progress = item.currentAmount / item.targetAmount;
          return (
            <View style={styles.goalCard}>
              <View style={styles.cardHeader}>
                <View style={styles.iconContainer}>
                  {item.icon}
                </View>
                <View style={styles.goalInfo}>
                  <Text style={styles.goalTitle}>{item.title}</Text>
                  <Text style={styles.goalDeadline}>{item.deadline}</Text>
                </View>
                <View style={styles.amountInfo}>
                  <Text style={styles.currentAmount}>${item.currentAmount}</Text>
                  <Text style={styles.targetAmount}>of ${item.targetAmount}</Text>
                </View>
              </View>
              
              <View style={styles.progressContainer}>
                <View style={styles.progressBarBackground}>
                  <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
                </View>
                <Text style={styles.progressPercentage}>{Math.round(progress * 100)}%</Text>
              </View>
            </View>
          );
        }}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  listContent: {
    padding: 20,
  },
  goalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  goalInfo: {
    flex: 1,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E293B',
  },
  goalDeadline: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  amountInfo: {
    alignItems: 'flex-end',
  },
  currentAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#008080',
  },
  targetAmount: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 2,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    marginRight: 12,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#008080',
    borderRadius: 4,
  },
  progressPercentage: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
    width: 35,
  },
});

export default SavingsGoalsScreen;
