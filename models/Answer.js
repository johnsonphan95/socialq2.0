const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    // user: {
    //     type: Schema.Types.Object, 
    //     ref: 'users'
    // },
    user: {
        _id: {
            type: Schema.Types.ObjectId, 
            ref: 'users'
        },
        age: {
            type: Number, 
            default: 0
        }, 
        gender: {
            type: String, 
            required: true
        }
    },
    question: {
        type: Schema.Types.ObjectId,
        ref: 'question'
    }, 
    answer: {
        type: String, 
        required: true 
    }
})

module.exports = Answer = mongoose.model('answer', AnswerSchema);