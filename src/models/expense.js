const mongoose = require('mongoose');

const expenseScheme = mongoose.Schema({
  text: String,
  price: Number,
  date: String,
});

module.exports = Expense = mongoose.model('Expenses', expenseScheme);