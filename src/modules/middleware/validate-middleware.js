const { validationResult } = require('express-validator');

module.exports = expenseValidator = (req, res, next) => {
  const error = validationResult(req);
  if (error.isEmpty()) {
    next();
  } else {
    res.status(400).send('Bad request. Validation error');
  }
}