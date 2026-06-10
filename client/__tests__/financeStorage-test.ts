import { 
  getTransactions, 
  saveTransactions, 
  getCategories, 
  saveCategories,
  getBudgets,
  saveBudgets,
  getGoals,
  saveGoals
} from '../src/services/financeStorage';
import { Transaction, Category, Budget, SavingsGoal } from '../src/types';

// Mock global fetch
global.fetch = jest.fn();

describe('FinanceStorage Service', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  describe('Transactions', () => {
    it('should return empty transactions if none exist', async () => {
      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => [],
      });
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

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({}),
      });

      await saveTransactions(mockTransactions);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/transactions'),
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(mockTransactions[0]),
        })
      );

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockTransactions,
      });
      const transactions = await getTransactions();
      expect(transactions).toEqual(mockTransactions);
    });

    it('should handle errors when reading transactions', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      (global.fetch as jest.Mock).mockRejectedValue(new Error('Read error'));
      
      const transactions = await getTransactions();
      expect(transactions).toEqual([]);
      expect(consoleSpy).toHaveBeenCalled();
      
      consoleSpy.mockRestore();
    });
  });

  describe('Budgets', () => {
    it('should save and retrieve budgets', async () => {
      const mockBudgets: Budget[] = [{
        id: '1',
        categoryId: 'food',
        limit: 500,
        spent: 120
      }];

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({}),
      });

      await saveBudgets(mockBudgets);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/budgets'),
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(mockBudgets),
        })
      );

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockBudgets,
      });
      const budgets = await getBudgets();
      expect(budgets).toEqual(mockBudgets);
    });
  });

  describe('Savings Goals', () => {
    it('should save and retrieve goals', async () => {
      const mockGoals: SavingsGoal[] = [{
        id: '1',
        title: 'New Car',
        targetAmount: 20000,
        currentAmount: 5000,
        icon: 'car'
      }];

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({}),
      });

      await saveGoals(mockGoals);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/goals'),
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(mockGoals),
        })
      );

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockGoals,
      });
      const goals = await getGoals();
      expect(goals).toEqual(mockGoals);
    });
  });
});
