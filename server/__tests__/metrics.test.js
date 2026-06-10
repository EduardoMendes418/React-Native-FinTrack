const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const express = require('express');
const transactionRoutes = require('../routes/transactionRoutes');

jest.setTimeout(60000);

let mongoServer;
const app = express();
app.use(express.json());
app.use('/api/transactions', transactionRoutes);

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Transaction API Metrics', () => {
  it('should return correct metrics for income and expenses', async () => {
    // Seed data
    const Transaction = require('../models/Transaction');
    await Transaction.create([
      { title: 'Salary', amount: 5000, categoryId: 'work', date: '2026-01-01', type: 'Income' },
      { title: 'Rent', amount: 1500, categoryId: 'home', date: '2026-01-02', type: 'Expense' },
      { title: 'Food', amount: 500, categoryId: 'food', date: '2026-01-03', type: 'Expense' }
    ]);

    const res = await request(app).get('/api/transactions/metrics');
    
    expect(res.statusCode).toEqual(200);
    expect(res.body.totalIncome).toBe(5000);
    expect(res.body.totalExpenses).toBe(2000);
    expect(res.body.balance).toBe(3000);
    expect(res.body.categoryBreakdown.home).toBe(1500);
  });
});
