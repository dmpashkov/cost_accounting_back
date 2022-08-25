const express = require('express');
const router = express.Router();
const expenseValidator = require('../middleware/validate-middleware');
const {
  textValidator,
  priceValidator,
  dateValidator
} = require('../middleware/req-validate-middleware');

const {
  getAllData,
  createNewExpense,
  changeExpenseInfo,
  deleteExpense,
} = require('../controllers/expense.controller');

router.get('/expenses', getAllData);
router.post('/new', textValidator, expenseValidator, createNewExpense);
router.patch('/update/:expenseid', textValidator, expenseValidator, changeExpenseInfo);
router.delete('/delete/:expenseid', deleteExpense);

module.exports = router;