const express = require('express');
const router = express.Router();
const { getTransactions, createTransaction, getMetrics } = require('../controllers/transactionController');

router.route('/')
  .get(getTransactions)
  .post(createTransaction);

router.get('/metrics', getMetrics);

module.exports = router;
