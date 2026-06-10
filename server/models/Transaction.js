const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  categoryId: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  type: { type: String, enum: ['Expense', 'Income'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', TransactionSchema);
