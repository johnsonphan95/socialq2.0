const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateQuestionInput(data) {
  let errors = {};
  data.option1 = validText(data.option1) ? data.option1 : '';
  data.option2 = validText(data.option2) ? data.option2 : '';

  if (Validator.isEmpty(data.option1)) {
    errors.option1 = "Answer 1 is required";
  }

  if (Validator.isEmpty(data.option2)) {
    errors.option2 = "Answer 2 is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};