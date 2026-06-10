const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  currentAmount: { type: Number, default: 0 },
  deadline: { type: String },
  icon: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Goal', GoalSchema);
