const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  categoryId: { type: String, required: true },
  limit: { type: Number, required: true },
  spent: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Budget', BudgetSchema);
