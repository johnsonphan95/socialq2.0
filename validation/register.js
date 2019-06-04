const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.username = validText(data.username) ? data.username : '';
  data.password = validText(data.password) ? data.password : '';
  data.password2 = validText(data.password2) ? data.password2 : '';

  if (!Validator.isLength(data.username, {min: 2, max: 20})) {
    errors.username = "Username must be betweeen 2 and 20 characters";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }

  if (!Validator.isLength(data.password, {min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password is required";
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = "Age is required"
  }

  if (!Validator.isNumeric(data.age)) {
    errors.age = "Age must be numeric"
  }
  
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender is required"
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};