const Transaction = require('../models/Transaction');

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.createTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json({ success: true, data: transaction });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.getMetrics = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    
    const income = transactions
      .filter(t => t.type === 'Income')
      .reduce((acc, curr) => acc + curr.amount, 0);
      
    const expenses = transactions
      .filter(t => t.type === 'Expense')
      .reduce((acc, curr) => acc + curr.amount, 0);
      
    const balance = income - expenses;

    // Group by category for breakdown
    const categoryBreakdown = transactions
      .filter(t => t.type === 'Expense')
      .reduce((acc, curr) => {
        acc[curr.categoryId] = (acc[curr.categoryId] || 0) + curr.amount;
        return acc;
      }, {});

    res.json({
      totalIncome: income,
      totalExpenses: expenses,
      balance,
      categoryBreakdown
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
