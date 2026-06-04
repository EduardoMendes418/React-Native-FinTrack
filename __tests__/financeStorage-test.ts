import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  getTransactions, 
  saveTransactions, 
  getCategories, 
  saveCategories 
} from '../src/services/financeStorage';
import { Transaction, Category } from '../src/types';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

describe('FinanceStorage Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return empty transactions if none exist', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
    const transactions = await getTransactions();
    expect(transactions).toEqual([]);
  });

  it('should save and retrieve transactions correctly', async () => {
    const mockTransactions: Transaction[] = [{
      id: '1',
      title: 'Coffee',
      amount: 5.5,
      categoryId: 'food',
      date: '2026-06-03',
      status: 'Active',
      type: 'Expense'
    }];

    await saveTransactions(mockTransactions);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      '@fintrack_transactions',
      JSON.stringify(mockTransactions)
    );

    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(mockTransactions));
    const transactions = await getTransactions();
    expect(transactions).toEqual(mockTransactions);
  });

  it('should handle errors when reading transactions', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    (AsyncStorage.getItem as jest.Mock).mockRejectedValue(new Error('Read error'));
    
    const transactions = await getTransactions();
    expect(transactions).toEqual([]);
    expect(consoleSpy).toHaveBeenCalled();
    
    consoleSpy.mockRestore();
  });
});
