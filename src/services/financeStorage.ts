import AsyncStorage from '@react-native-async-storage/async-storage';
import { Transaction, Category, Budget, SavingsGoal } from '../types';

const TRANSACTIONS_KEY = '@fintrack_transactions';
const CATEGORIES_KEY = '@fintrack_categories';
const BUDGETS_KEY = '@fintrack_budgets';
const GOALS_KEY = '@fintrack_goals';

export const getTransactions = async (): Promise<Transaction[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(TRANSACTIONS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error reading transactions', e);
    return [];
  }
};

export const saveTransactions = async (transactions: Transaction[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(transactions);
    await AsyncStorage.setItem(TRANSACTIONS_KEY, jsonValue);
  } catch (e) {
    console.error('Error saving transactions', e);
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(CATEGORIES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error reading categories', e);
    return [];
  }
};

export const saveCategories = async (categories: Category[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(categories);
    await AsyncStorage.setItem(CATEGORIES_KEY, jsonValue);
  } catch (e) {
    console.error('Error saving categories', e);
  }
};

export const getBudgets = async (): Promise<Budget[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(BUDGETS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error reading budgets', e);
    return [];
  }
};

export const saveBudgets = async (budgets: Budget[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(budgets);
    await AsyncStorage.setItem(BUDGETS_KEY, jsonValue);
  } catch (e) {
    console.error('Error saving budgets', e);
  }
};

export const getGoals = async (): Promise<SavingsGoal[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(GOALS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error reading goals', e);
    return [];
  }
};

export const saveGoals = async (goals: SavingsGoal[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(goals);
    await AsyncStorage.setItem(GOALS_KEY, jsonValue);
  } catch (e) {
    console.error('Error saving goals', e);
  }
};
