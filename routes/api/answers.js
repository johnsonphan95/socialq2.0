const express = require("express");
const router = express.Router();
const passport = require('passport');

const Answer = require('../../models/Answer');
const validateAnswerInput = require('../../validation/answers');

router.get('/', (req, res) => {
    Answer
        .find()
        .then(answers => res.json(answers))
        .catch(err => res.status(404).json({noanswersfound: "No answers found"}))
});

//answers from specific user
router.get("/users/:user_id", (req, res) => {
    Answer
        .find({user: req.params.user_id})
        .then(answers => res.json(answers))
        .catch(err => res.status(400).json(err));
})

//answers for specific question
router.get("/questions/:question_id", (req, res) => {
    Answer
        .find({question: req.params.question_id})
        .then(answers => res.json(answers))
        .catch(err => res.status(400).json(err))
})

//specific answers for specific question
router.get("/questions/:question_id/:answer", (req, res) => {
    Answer
        .find({question: req.params.question_id, answer: req.params.answer})
        .then(answers => res.json(answers))
        .catch(err => res.status(400).json(err))
})


router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateAnswerInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newAnswer = new Answer({
            user: req.user.id, 
            answer: req.body.answer, 
            question: req.body.question
        });

        newAnswer.save()
            .then(answer => res.json(answer));
    }
);

module.exports = router; 