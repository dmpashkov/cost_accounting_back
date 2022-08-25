const Expense = require('../../models/expense');

const getAllData = async (req, res) => {
  try {
    const result = await Expense.find();
    res.status(200).send({ data: result })
  } catch (error) {
    res.status(400).send('Bad Request expenses not found')
    console.error('expense not found');
  }
}

const createNewExpense = async (req, res) => {
  try {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = `${dd}.${mm}.${yyyy}`;

    const expense = new Expense({
      text: req.body.text,
      price: req.body.price,
      date: today
    });
    const result = await expense.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send('Bad Request expense not saved')
    console.error('expense not saved');
  }
};

const changeExpenseInfo = async (req, res) => {
  try {
    if (!req.params.hasOwnProperty('expenseid')
    || req.params.expenseid === '') {
      throw new Error;
    }
    const id = req.params.expenseid;
    const text = req.body.text;
    const price = req.body.price;
    const result = await Expense.findOneAndUpdate(
      {_id: id},
      {$set: {text, price}}
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send('Bad Request expense not changed')
    console.error('expense not changed');
  }
};

const deleteExpense = async (req, res) => {
  try {
    if (!req.params.hasOwnProperty('expenseid')
    || req.params.expenseid === '') {
      throw new Error;
    }
    const id = req.params.expenseid;
    const result = await Expense.deleteOne({ _id: id });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send('Bad Request expense is not deleted')
    console.error('expense is not deleted');
  }
};

module.exports = {
  getAllData,
  createNewExpense,
  changeExpenseInfo,
  deleteExpense
}