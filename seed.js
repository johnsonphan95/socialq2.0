const mongoose = require('mongoose')
const dbConf = require('./config/keys')

mongoose.connect(dbConf.mongoURI)
mongoose.Promise = global.Promise; 

const User = require('./models/User');
const Question = require('./models/Question');
const Answer = require('./models/Answer');

function seedUsers() {
    const users =[
        {username: "johnsonandjohnson", password: "soap123", gender: "male", age: 25},
        {username: "ajay", password: "music123", gender: "male", age: 25 },
        {username: "jenna", password: "jenna123", gender: "female", age: 14 },
        {username: "kylie", password: "kylie123", gender: "female", age: 45},
        {username: "Demo_User", password: "password123", gender: "female", age: 32 },
        {username: "josh", password: "bikes123", gender: "male", age: 25 },
        {username: "haseeb", password: "poker123", gender: "male", age: 16 },
        {username: "joe", password: "password123", gender: "male", age: 59 },
        {username: "jimmy", password: "pokemon123", gender: "male", age: 12 },
        {username: "mike", password: "canada123", gender: "male", age: 26 },
        {username: "yinglan", password: "math123", gender: "female", age: 25},
        {username: "georgecarman", password: "cars123", gender: "male", age: 65 },
        {username: "raphael", password: "ciggys123", gender: "male", age: 15 },
        {username: "joanna", password: "cats123", gender: "female", age: 39 }
    ];

    for (user of users) {
        var newUser = new User(user);
        newUser.save();
    }

}

function seedQuestions() {
    const questions = [
        {userId: 1, option1: "Fight 100 duck-sized horses", option2: "Fight 1 duck-sized horse", questionType: "wyr", body: "", upvote: 4, downvote: 1},
        {userId: 2, option1: "Work your dream job with a 4 hour commute", option2: "Work a satisfying job with a 10 minute commute", questionType: "wyr", body: "", upvote: 5, downvote: 0},
        {userId: 3, option1: "Give up cheese", option2: "Give up chocolate", questionType: "wyr", body: "", upvote: 10, downvote: 4 },
        {userId: 4, option1: "Control animals with your mind", option2: "Control humans with your mind", questionType: "wyr", body: "", upvote: 2, downvote: 2 },
        {userId: 5, option1: "All your shirts are 2 sizes too big", option2: "All your shirts are 1 size too small", questionType: "wyr", body: "", upvote: 4, downvote: 1 },
        {userId: 6, option1: "Cheeto dust on your fingers for 2 years", option2: "Wet socks for a year", questionType: "wyr", body: "", upvote: 4, downvote: 2 },
        {userId: 7, option1: "Be a master at every instrument", option2: "Be fluent in every language", questionType: "wyr", body: "", upvote: 4, downvote: 0 },
        {userId: 1, option1: "Have super sensitive hearing", option2: "Have super sensitive taste", questionType: "wyr", body: "", upvote: 4, downvote: 4 },
        {userId: 2, option1: "Be able to fly", option2: "Be able to become invisible", questionType: "wyr", body: "", upvote: 16, downvote: 1 },
        {userId: 5, option1: "Win $10,000", option2: "Let your best friend with $100,000", questionType: "wyr", body: "", upvote: 5, downvote: 1 },
        {userId: 6, option1: "Redflag", option2: "Dealbraker", questionType: "rfdb", body: "Has 9 dogs", upvote: 4, downvote: 2 },
        {userId: 7, option1: "Redflag", option2: "Dealbraker", questionType: "rfdb", body: "Has a face tattoo", upvote: 15, downvote: 0 },
        {userId: 1, option1: "Redflag", option2: "Dealbraker", questionType: "rfdb", body: "Has been in prison", upvote: 3, downvote: 4 },
        {userId: 2, option1: "Redflag", option2: "Dealbraker", questionType: "rfdb", body: "Never breaks eye contact", upvote: 0, downvote: 1 },
        {userId: 5, option1: "Redflag", option2: "Dealbraker", questionType: "rfdb", body: "Does not live in a place for > 2 years", upvote: 1, downvote: 1 }
    ];

    for (question of questions) {
        var newQuestion = new Question(question);
        newQuestion.save();
    }
}

function seedAnswers(){
    const answers =[
        {user: {id: 1, age: 25, gender: 'male',}, questionId: 1, answer: "a"},
        {user: { id: 1, age: 25, gender: 'male', }, questionId: 2, answer: "b"},
        { user: { id: 1, age: 25, gender: 'male', }, questionId: 3, answer: "b" },
        { user: { id: 1, age: 25, gender: 'male', }, questionId: 4, answer: "a" },
        { user: { id: 1, age: 25, gender: 'male', }, questionId: 5, answer: "b" },
        { user: { id: 1, age: 25, gender: 'male', }, questionId: 6, answer: "a" },
        { user: { id: 1, age: 25, gender: 'male', }, questionId: 7, answer: "b" },
        { user: { id: 1, age: 25, gender: 'male', }, questionId: 8, answer: "a" },
        { user: { id: 1, age: 25, gender: 'male', }, questionId: 9, answer: "b" },
        { user: { id: 1, age: 25, gender: 'male', }, questionId: 10, answer: "a" },
        { user: { id: 1, age: 25, gender: 'male', }, questionId: 11, answer: "b" },
        { user: { id: 1, age: 25, gender: 'male', }, questionId: 12, answer: "a" },
        { user: { id: 1, age: 25, gender: 'male', }, questionId: 13, answer: "b" },
        { user: { id: 1, age: 25, gender: 'male', }, questionId: 14, answer: "a" },
        { user: { id: 1, age: 25, gender: 'male', }, questionId: 15, answer: "b" },

        { user: { id: 2, age: 25, gender: 'male', }, questionId: 1, answer: "b" },
        { user: { id: 2, age: 25, gender: 'male', }, questionId: 2, answer: "a" },
        { user: { id: 2, age: 25, gender: 'male', }, questionId: 3, answer: "b" },
        { user: { id: 2, age: 25, gender: 'male', }, questionId: 4, answer: "b" },
        { user: { id: 2, age: 25, gender: 'male', }, questionId: 5, answer: "b" },
        { user: { id: 2, age: 25, gender: 'male', }, questionId: 6, answer: "b" },
        { user: { id: 2, age: 25, gender: 'male', }, questionId: 7, answer: "b" },
        { user: { id: 2, age: 25, gender: 'male', }, questionId: 8, answer: "a" },
        { user: { id: 2, age: 25, gender: 'male', }, questionId: 9, answer: "a" },
        { user: { id: 2, age: 25, gender: 'male', }, questionId: 10, answer: "a" },
        { user: { id: 2, age: 25, gender: 'male', }, questionId: 11, answer: "b" },
        { user: { id: 2, age: 25, gender: 'male', }, questionId: 12, answer: "a" },
        { user: { id: 2, age: 25, gender: 'male', }, questionId: 13, answer: "a" },
        { user: { id: 2, age: 25, gender: 'male', }, questionId: 14, answer: "a" },
        { user: { id: 2, age: 25, gender: 'male', }, questionId: 15, answer: "b" },

        { user: { id: 3, age: 14, gender: 'female', }, questionId: 1, answer: "a" },
        { user: { id: 3, age: 14, gender: 'female', }, questionId: 2, answer: "b" },
        { user: { id: 3, age: 14, gender: 'female', }, questionId: 3, answer: "a" },
        { user: { id: 3, age: 14, gender: 'female', }, questionId: 4, answer: "a" },
        { user: { id: 3, age: 14, gender: 'female', }, questionId: 5, answer: "b" },
        { user: { id: 3, age: 14, gender: 'female', }, questionId: 6, answer: "a" },
        { user: { id: 3, age: 14, gender: 'female', }, questionId: 7, answer: "b" },
        { user: { id: 3, age: 14, gender: 'female', }, questionId: 8, answer: "b" },
        { user: { id: 3, age: 14, gender: 'female', }, questionId: 9, answer: "a" },
        { user: { id: 3, age: 14, gender: 'female', }, questionId: 10, answer: "a" },
        { user: { id: 3, age: 14, gender: 'female', }, questionId: 11, answer: "a" },
        { user: { id: 3, age: 14, gender: 'female', }, questionId: 12, answer: "a" },
        { user: { id: 3, age: 14, gender: 'female', }, questionId: 13, answer: "b" },
        { user: { id: 3, age: 14, gender: 'female', }, questionId: 14, answer: "b" },
        { user: { id: 3, age: 14, gender: 'female', }, questionId: 15, answer: "a" },


        { user: { id: 4, age: 45, gender: 'female', }, questionId: 1, answer: "b" },
        { user: { id: 4, age: 45, gender: 'female', }, questionId: 2, answer: "a" },
        { user: { id: 4, age: 45, gender: 'female', }, questionId: 3, answer: "a" },
        { user: { id: 4, age: 45, gender: 'female', }, questionId: 4, answer: "a" },
        { user: { id: 4, age: 45, gender: 'female', }, questionId: 5, answer: "b" },
        { user: { id: 4, age: 45, gender: 'female', }, questionId: 6, answer: "b" },
        { user: { id: 4, age: 45, gender: 'female', }, questionId: 7, answer: "a" },
        { user: { id: 4, age: 45, gender: 'female', }, questionId: 8, answer: "a" },
        { user: { id: 4, age: 45, gender: 'female', }, questionId: 9, answer: "a" },
        { user: { id: 4, age: 45, gender: 'female', }, questionId: 10, answer: "a" },
        { user: { id: 4, age: 45, gender: 'female', }, questionId: 11, answer: "b" },
        { user: { id: 4, age: 45, gender: 'female', }, questionId: 12, answer: "b" },
        { user: { id: 4, age: 45, gender: 'female', }, questionId: 13, answer: "b" },
        { user: { id: 4, age: 45, gender: 'female', }, questionId: 14, answer: "a" },
        { user: { id: 4, age: 45, gender: 'female', }, questionId: 15, answer: "a" },

        { user: { id: 5, age: 32, gender: 'female', }, questionId: 1, answer: "a" },
        { user: { id: 5, age: 32, gender: 'female', }, questionId: 2, answer: "a" },
        { user: { id: 5, age: 32, gender: 'female', }, questionId: 3, answer: "a" },
        { user: { id: 5, age: 32, gender: 'female', }, questionId: 4, answer: "a" },
        { user: { id: 5, age: 32, gender: 'female', }, questionId: 5, answer: "a" },
        { user: { id: 5, age: 32, gender: 'female', }, questionId: 6, answer: "a" },
        { user: { id: 5, age: 32, gender: 'female', }, questionId: 7, answer: "a" },
        { user: { id: 5, age: 32, gender: 'female', }, questionId: 8, answer: "a" },
        { user: { id: 5, age: 32, gender: 'female', }, questionId: 9, answer: "a" },
        { user: { id: 5, age: 32, gender: 'female', }, questionId: 10, answer: "a" },
        { user: { id: 5, age: 32, gender: 'female', }, questionId: 11, answer: "a" },
        { user: { id: 5, age: 32, gender: 'female', }, questionId: 12, answer: "a" },
        { user: { id: 5, age: 32, gender: 'female', }, questionId: 13, answer: "a" },
        { user: { id: 5, age: 32, gender: 'female', }, questionId: 14, answer: "a" },
        { user: { id: 5, age: 32, gender: 'female', }, questionId: 15, answer: "a" },

        { user: { id: 6, age: 25, gender: 'male', }, questionId: 1, answer: "b" },
        { user: { id: 6, age: 25, gender: 'male', }, questionId: 2, answer: "b" },
        { user: { id: 6, age: 25, gender: 'male', }, questionId: 3, answer: "b" },
        { user: { id: 6, age: 25, gender: 'male', }, questionId: 4, answer: "b" },
        { user: { id: 6, age: 25, gender: 'male', }, questionId: 5, answer: "b" },
        { user: { id: 6, age: 25, gender: 'male', }, questionId: 6, answer: "b" },
        { user: { id: 6, age: 25, gender: 'male', }, questionId: 7, answer: "b" },
        { user: { id: 6, age: 25, gender: 'male', }, questionId: 8, answer: "b" },
        { user: { id: 6, age: 25, gender: 'male', }, questionId: 9, answer: "b" },
        { user: { id: 6, age: 25, gender: 'male', }, questionId: 10, answer: "b" },
        { user: { id: 6, age: 25, gender: 'male', }, questionId: 11, answer: "b" },
        { user: { id: 6, age: 25, gender: 'male', }, questionId: 12, answer: "b" },
        { user: { id: 6, age: 25, gender: 'male', }, questionId: 13, answer: "b" },
        { user: { id: 6, age: 25, gender: 'male', }, questionId: 14, answer: "b" },
        { user: { id: 6, age: 25, gender: 'male', }, questionId: 15, answer: "b" },

        { user: { id: 7, age: 16, gender: 'male', }, questionId: 1, answer: "a" },
        { user: { id: 7, age: 16, gender: 'male', }, questionId: 2, answer: "b" },
        { user: { id: 7, age: 16, gender: 'male', }, questionId: 3, answer: "a" },
        { user: { id: 7, age: 16, gender: 'male', }, questionId: 4, answer: "b" },
        { user: { id: 7, age: 16, gender: 'male', }, questionId: 5, answer: "a" },
        { user: { id: 7, age: 16, gender: 'male', }, questionId: 6, answer: "b" },
        { user: { id: 7, age: 16, gender: 'male', }, questionId: 7, answer: "a" },
        { user: { id: 7, age: 16, gender: 'male', }, questionId: 8, answer: "b" },
        { user: { id: 7, age: 16, gender: 'male', }, questionId: 9, answer: "a" },
        { user: { id: 7, age: 16, gender: 'male', }, questionId: 10, answer: "b" },
        { user: { id: 7, age: 16, gender: 'male', }, questionId: 11, answer: "a" },
        { user: { id: 7, age: 16, gender: 'male', }, questionId: 12, answer: "b" },
        { user: { id: 7, age: 16, gender: 'male', }, questionId: 13, answer: "a" },
        { user: { id: 7, age: 16, gender: 'male', }, questionId: 14, answer: "b" },
        { user: { id: 7, age: 16, gender: 'male', }, questionId: 15, answer: "a" },

        { user: { id: 8, age: 59, gender: 'male', }, questionId: 1, answer: "b" },
        { user: { id: 8, age: 59, gender: 'male', }, questionId: 2, answer: "b" },
        { user: { id: 8, age: 59, gender: 'male', }, questionId: 3, answer: "b" },
        { user: { id: 8, age: 59, gender: 'male', }, questionId: 4, answer: "b" },
        { user: { id: 8, age: 59, gender: 'male', }, questionId: 5, answer: "b" },
        { user: { id: 8, age: 59, gender: 'male', }, questionId: 6, answer: "b" },
        { user: { id: 8, age: 59, gender: 'male', }, questionId: 7, answer: "b" },
        { user: { id: 8, age: 59, gender: 'male', }, questionId: 8, answer: "b" },
        { user: { id: 8, age: 59, gender: 'male', }, questionId: 9, answer: "b" },
        { user: { id: 8, age: 59, gender: 'male', }, questionId: 10, answer: "b" },
        { user: { id: 8, age: 59, gender: 'male', }, questionId: 11, answer: "b" },
        { user: { id: 8, age: 59, gender: 'male', }, questionId: 12, answer: "b" },
        { user: { id: 8, age: 59, gender: 'male', }, questionId: 13, answer: "b" },
        { user: { id: 8, age: 59, gender: 'male', }, questionId: 14, answer: "b" },
        { user: { id: 8, age: 59, gender: 'male', }, questionId: 15, answer: "b" },

        { user: { id: 9, age: 12, gender: 'male', }, questionId: 1, answer: "a" },
        { user: { id: 9, age: 12, gender: 'male', }, questionId: 2, answer: "a" },
        { user: { id: 9, age: 12, gender: 'male', }, questionId: 3, answer: "a" },
        { user: { id: 9, age: 12, gender: 'male', }, questionId: 4, answer: "a" },
        { user: { id: 9, age: 12, gender: 'male', }, questionId: 5, answer: "a" },
        { user: { id: 9, age: 12, gender: 'male', }, questionId: 6, answer: "a" },
        { user: { id: 9, age: 12, gender: 'male', }, questionId: 7, answer: "a" },
        { user: { id: 9, age: 12, gender: 'male', }, questionId: 8, answer: "a" },
        { user: { id: 9, age: 12, gender: 'male', }, questionId: 9, answer: "a" },
        { user: { id: 9, age: 12, gender: 'male', }, questionId: 10, answer: "a" },
        { user: { id: 9, age: 12, gender: 'male', }, questionId: 11, answer: "a" },
        { user: { id: 9, age: 12, gender: 'male', }, questionId: 12, answer: "a" },
        { user: { id: 9, age: 12, gender: 'male', }, questionId: 13, answer: "a" },
        { user: { id: 9, age: 12, gender: 'male', }, questionId: 14, answer: "a" },
        { user: { id: 9, age: 12, gender: 'male', }, questionId: 15, answer: "a" },
        
        { user: { id: 10, age: 26, gender: 'male', }, questionId: 1, answer: "b" },
        { user: { id: 10, age: 26, gender: 'male', }, questionId: 2, answer: "a" },
        { user: { id: 10, age: 26, gender: 'male', }, questionId: 3, answer: "b" },
        { user: { id: 10, age: 26, gender: 'male', }, questionId: 4, answer: "a" },
        { user: { id: 10, age: 26, gender: 'male', }, questionId: 5, answer: "b" },
        { user: { id: 10, age: 26, gender: 'male', }, questionId: 6, answer: "a" },
        { user: { id: 10, age: 26, gender: 'male', }, questionId: 7, answer: "b" },
        { user: { id: 10, age: 26, gender: 'male', }, questionId: 8, answer: "a" },
        { user: { id: 10, age: 26, gender: 'male', }, questionId: 9, answer: "b" },
        { user: { id: 10, age: 26, gender: 'male', }, questionId: 10, answer: "a" },
        { user: { id: 10, age: 26, gender: 'male', }, questionId: 11, answer: "b" },
        { user: { id: 10, age: 26, gender: 'male', }, questionId: 12, answer: "a" },
        { user: { id: 10, age: 26, gender: 'male', }, questionId: 13, answer: "b" },
        { user: { id: 10, age: 26, gender: 'male', }, questionId: 14, answer: "a" },
        { user: { id: 10, age: 26, gender: 'male', }, questionId: 15, answer: "b" },

        { user: { id: 11, age: 25, gender: 'female', }, questionId: 1, answer: "a" },
        { user: { id: 11, age: 25, gender: 'female', }, questionId: 2, answer: "a" },
        { user: { id: 11, age: 25, gender: 'female', }, questionId: 3, answer: "b" },
        { user: { id: 11, age: 25, gender: 'female', }, questionId: 4, answer: "a" },
        { user: { id: 11, age: 25, gender: 'female', }, questionId: 5, answer: "a" },
        { user: { id: 11, age: 25, gender: 'female', }, questionId: 6, answer: "b" },
        { user: { id: 11, age: 25, gender: 'female', }, questionId: 7, answer: "a" },
        { user: { id: 11, age: 25, gender: 'female', }, questionId: 8, answer: "a" },
        { user: { id: 11, age: 25, gender: 'female', }, questionId: 9, answer: "b" },
        { user: { id: 11, age: 25, gender: 'female', }, questionId: 10, answer: "a" },
        { user: { id: 11, age: 25, gender: 'female', }, questionId: 11, answer: "a" },
        { user: { id: 11, age: 25, gender: 'female', }, questionId: 12, answer: "b" },
        { user: { id: 11, age: 25, gender: 'female', }, questionId: 13, answer: "a" },
        { user: { id: 11, age: 25, gender: 'female', }, questionId: 14, answer: "a" },
        { user: { id: 11, age: 25, gender: 'female', }, questionId: 15, answer: "b" },

        { user: { id: 12, age: 65, gender: 'male', }, questionId: 1, answer: "a" },
        { user: { id: 12, age: 65, gender: 'male', }, questionId: 2, answer: "a" },
        { user: { id: 12, age: 65, gender: 'male', }, questionId: 3, answer: "a" },
        { user: { id: 12, age: 65, gender: 'male', }, questionId: 4, answer: "a" },
        { user: { id: 12, age: 65, gender: 'male', }, questionId: 5, answer: "a" },
        { user: { id: 12, age: 65, gender: 'male', }, questionId: 6, answer: "a" },
        { user: { id: 12, age: 65, gender: 'male', }, questionId: 7, answer: "a" },
        { user: { id: 12, age: 65, gender: 'male', }, questionId: 8, answer: "a" },
        { user: { id: 12, age: 65, gender: 'male', }, questionId: 9, answer: "a" },
        { user: { id: 12, age: 65, gender: 'male', }, questionId: 10, answer: "a" },
        { user: { id: 12, age: 65, gender: 'male', }, questionId: 11, answer: "a" },
        { user: { id: 12, age: 65, gender: 'male', }, questionId: 12, answer: "a" },
        { user: { id: 12, age: 65, gender: 'male', }, questionId: 13, answer: "a" },
        { user: { id: 12, age: 65, gender: 'male', }, questionId: 14, answer: "a" },
        { user: { id: 12, age: 65, gender: 'male', }, questionId: 15, answer: "a" },

        { user: { id: 13, age: 15, gender: 'male', }, questionId: 1, answer: "a" },
        { user: { id: 13, age: 15, gender: 'male', }, questionId: 2, answer: "b" },
        { user: { id: 13, age: 15, gender: 'male', }, questionId: 3, answer: "b" },
        { user: { id: 13, age: 15, gender: 'male', }, questionId: 4, answer: "a" },
        { user: { id: 13, age: 15, gender: 'male', }, questionId: 5, answer: "a" },
        { user: { id: 13, age: 15, gender: 'male', }, questionId: 6, answer: "b" },
        { user: { id: 13, age: 15, gender: 'male', }, questionId: 7, answer: "b" },
        { user: { id: 13, age: 15, gender: 'male', }, questionId: 8, answer: "a" },
        { user: { id: 13, age: 15, gender: 'male', }, questionId: 9, answer: "a" },
        { user: { id: 13, age: 15, gender: 'male', }, questionId: 10, answer: "b" },
        { user: { id: 13, age: 15, gender: 'male', }, questionId: 11, answer: "b" },
        { user: { id: 13, age: 15, gender: 'male', }, questionId: 12, answer: "b" },
        { user: { id: 13, age: 15, gender: 'male', }, questionId: 13, answer: "b" },
        { user: { id: 13, age: 15, gender: 'male', }, questionId: 14, answer: "b" },
        { user: { id: 13, age: 15, gender: 'male', }, questionId: 15, answer: "a" },

        { user: { id: 14, age: 39, gender: 'male', }, questionId: 1, answer: "a" },
        { user: { id: 14, age: 39, gender: 'male', }, questionId: 2, answer: "a" },
        { user: { id: 14, age: 39, gender: 'male', }, questionId: 3, answer: "b" },
        { user: { id: 14, age: 39, gender: 'male', }, questionId: 4, answer: "a" },
        { user: { id: 14, age: 39, gender: 'male', }, questionId: 5, answer: "a" },
        { user: { id: 14, age: 39, gender: 'male', }, questionId: 6, answer: "b" },
        { user: { id: 14, age: 39, gender: 'male', }, questionId: 7, answer: "a" },
        { user: { id: 14, age: 39, gender: 'male', }, questionId: 8, answer: "a" },
        { user: { id: 14, age: 39, gender: 'male', }, questionId: 9, answer: "b" },
        { user: { id: 14, age: 39, gender: 'male', }, questionId: 10, answer: "b" },
        { user: { id: 14, age: 39, gender: 'male', }, questionId: 11, answer: "b" },
        { user: { id: 14, age: 39, gender: 'male', }, questionId: 12, answer: "a" },
        { user: { id: 14, age: 39, gender: 'male', }, questionId: 13, answer: "a" },
        { user: { id: 14, age: 39, gender: 'male', }, questionId: 14, answer: "b" },
        { user: { id: 14, age: 39, gender: 'male', }, questionId: 15, answer: "a" }
    ]

    for (answer of answers) {
        var newAnswer = new Answer(answer);
        newAnswer.save();
    }
}

async function seedAll(){
    mongoose.connection.dropDatabase(); 
    await seedUsers();
    await seedQuestions();
    await seedAnswers();
}

seedAll(); 
