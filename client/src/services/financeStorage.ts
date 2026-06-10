import { Transaction, Category, Budget, SavingsGoal } from '../types';
import API_URL from './apiConfig';

export interface FinancialMetrics {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
  categoryBreakdown: Record<string, number>;
}

export const getTransactions = async (): Promise<Transaction[]> => {
  try {
    const response = await fetch(`${API_URL}/transactions`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (e) {
    console.error('Error reading transactions', e);
    return [];
  }
};

export const getMetrics = async (): Promise<FinancialMetrics | null> => {
  try {
    const response = await fetch(`${API_URL}/transactions/metrics`);
    if (!response.ok) throw new Error('Error fetching metrics');
    return await response.json();
  } catch (e) {
    console.error('Error reading metrics', e);
    return null;
  }
};

export const saveTransactions = async (transactions: Transaction[]): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/transactions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transactions[transactions.length - 1]),
    });
    if (!response.ok) throw new Error('Error saving transaction');
  } catch (e) {
    console.error('Error saving transactions', e);
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (e) {
    console.error('Error reading categories', e);
    return [];
  }
};

export const saveCategories = async (categories: Category[]): Promise<void> => {
  try {
    await fetch(`${API_URL}/categories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(categories[categories.length - 1]),
    });
  } catch (e) {
    console.error('Error saving categories', e);
  }
};

export const getBudgets = async (): Promise<Budget[]> => {
  try {
    const response = await fetch(`${API_URL}/budgets`);
    return await response.json();
  } catch (e) {
    console.error('Error reading budgets', e);
    return [];
  }
};

export const saveBudgets = async (budgets: Budget[]): Promise<void> => {
  try {
    await fetch(`${API_URL}/budgets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(budgets),
    });
  } catch (e) {
    console.error('Error saving budgets', e);
  }
};

export const getGoals = async (): Promise<SavingsGoal[]> => {
  try {
    const response = await fetch(`${API_URL}/goals`);
    return await response.json();
  } catch (e) {
    console.error('Error reading goals', e);
    return [];
  }
};

export const saveGoals = async (goals: SavingsGoal[]): Promise<void> => {
  try {
    await fetch(`${API_URL}/goals`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goals),
    });
  } catch (e) {
    console.error('Error saving goals', e);
  }
};
