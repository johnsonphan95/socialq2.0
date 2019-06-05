const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateAnswerInput(data) {
    let errors = {};
    data.answer = validText(data.answer) ? data.answer : '';

    if (Validator.isEmpty(data.answer)) {
        errors.answer = "Answer is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};