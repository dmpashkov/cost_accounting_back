const { check } = require('express-validator');

const textValidator = [
  check('text')
    .exists()
    .not()
    .isEmpty()
];
const dateValidator = [
  check('text')
    .exists()
    .not()
    .isEmpty()
];
const priceValidator = [
  check('text')
    .exists()
    .not()
    .isEmpty()
];

module.exports = {
  textValidator,
  dateValidator,
  priceValidator
};
