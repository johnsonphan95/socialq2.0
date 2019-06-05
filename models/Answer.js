const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'users'
    },
    question: {
        type: Schema.Types.ObjectId,
        ref: 'question'
    }, 
    body: {
        type: String, 
        required: true 
    }
})

module.exports = Answer = mongoose.model('answer', AnswerSchema);