const express = require('express');
const router = express.Router();
const passport = require('passport');

const Question = require('../../models/Question');
const validateQuestionInput = require('../../validation/questions');

// get all questions
router.get('/', (req,res) => {
  Question.find()
    .sort({date: -1})
    .then(questions => res.json(questions))
    .catch(err => res.status(404).json({noquestionsfound: 'No questions found'}));
});

// get specific users questions
router.get('/user/:user_id', (req,res) => {
  Question.find({user: req.params.user_id})
    .then(questions => res.json(questions))
    .catch(err => res.status(404).json({noquestionsfound: "No questions found for user"}));
});

// get specific question
router.get('/:id', (req,res) => {
  Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(err => res.status(404).json({noquestionfound: "No question found"}));
});

// get questions by type 
router.get('/type/:type', (req,res) => {
  Question.find({questionType: req.params.type})
    .then(questions => res.json(questions))
    .catch(err => res.status(404).json({noquestionsfound: "No questions found"}));
});

// create a question
router.post('/', 
  passport.authenticate('jwt', { session: false}),
  (req,res) => {
    const { errors, isValid } = validateQuestionInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newQuestion = new Question({
      user: req.user.id,
      option1: req.body.option1,
      option2: req.body.option2,
      questionType: req.body.questionType
    });

    newQuestion.save()
      .then(question => res.json(question));
  }
);

router.patch('/:id', (req, res) => {
  Question.findById(req.params.id)
  .then(question => {
    // if (req.body.upvote) {
    //   question.upvote += Number.parseInt(req.body.upvote);
    // }
    // if (req.body.downvote) {
    //   question.downvote += Number.parseInt(req.body.downvote);
    // }
    // if (req.body.answer_a) {
    //   question.answer_a += Number.parseInt(req.body.answer_a);
    // }
    // if (req.body.answer_b) {
    //   question.answer_b += Number.parseInt(req.body.answer_b);
    // }
    if (req.body.answer_a) {
      question.answer_a = req.body.answer_a 
    }
    if (req.body.answer_b) {
      question.answer_b = req.body.answer_b
    }
    if (req.body.upvote) {
      question.upvote = req.body.upvote 
    }
    if (req.body.downvote) {
      question.downvote = req.body.downvote
    }
      
    question.save()
      .then(question => res.json(question))
      .catch(err => res.status(400).json(err))
  }
  )
})


module.exports = router;
