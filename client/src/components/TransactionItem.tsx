import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../theme';

interface TransactionItemProps {
  title: string;
  category: string;
  amount: string;
  type: 'Expense' | 'Income';
  icon: React.ReactNode;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ 
  title, 
  category, 
  amount, 
  type, 
  icon 
}) => {
  const isIncome = type === 'Income';

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <Text style={[
        styles.amount, 
        isIncome ? styles.incomeText : styles.expenseText
      ]}>
        {amount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.secondary,
  },
  category: {
    fontSize: 13,
    color: COLORS.text,
    marginTop: 2,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  incomeText: {
    color: COLORS.success,
  },
  expenseText: {
    color: COLORS.error,
  },
});

export default TransactionItem;
