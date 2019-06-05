const express = require("express");
const router = express.Router();
const passport = require('passport');

const Answer = require('../../models/Answer');
const validateAnswerInput = require('../../validation/answers');

router.get('/', (req, res) => {
    res.json({msg: "This is the answer route"});
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateAnswerInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newAnswer = new Answer({
            user: req.user.id, 
            answer: req.body.answer
        });

        newAnswer.save()
            .then(answer => res.json(answer));
    }
);

module.exports = router; 