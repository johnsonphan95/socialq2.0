const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  option1: {
    type: String,
    required: true
  },
  option2: {
    type: String,
    required: true
  },
  questionType: {
    type: String,
    required: true
  },
  upvote: {
    type: Number,
    default: 0
  },
  downvote: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Question = mongoose.model('question', QuestionSchema);