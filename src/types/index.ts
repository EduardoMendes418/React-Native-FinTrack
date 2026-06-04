export type TransactionStatus = 'Active' | 'Inactive';

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  type: 'Expense' | 'Income';
}

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  categoryId: string;
  date: string;
  description?: string;
  status: TransactionStatus;
  type: 'Expense' | 'Income';
}

export interface Budget {
  id: string;
  categoryId: string;
  limit: number;
  spent: number;
}

export interface SavingsGoal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline?: string;
  icon: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
}
