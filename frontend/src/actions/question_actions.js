import {
  getQuestions,
  getUserQuestions,
  writeQuestion,
  getUniqueQuestion, 
  updateQuestion
} from '../util/question_api_util';

export const RECEIVE_QUESTIONS  = "RECEIVE_QUESTIONS";
export const RECEIVE_USER_QUESTIONS = "RECEIVE_USER_QUESTIONS";
export const RECEIVE_NEW_QUESTION = "RECEIVE_NEW_QUESTION";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

export const receiveUserQuestions = questions => ({
  type: RECEIVE_USER_QUESTIONS,
  questions
});

export const receiveNewQuestion = question => ({
  type: RECEIVE_NEW_QUESTION,
  question
});

export const fetchQuestions = () => dispatch => (
  getQuestions()
    .then(questions => dispatch(receiveQuestions(questions)))
    .catch(err => console.log(err))
);

export const fetchUserQuestions = id => dispatch => (
  getUserQuestions(id)
    .then(questions => dispatch(receiveUserQuestions(questions)))
    .catch(err => console.log(err))
);

export const composeQuestion = data => dispatch => (
  writeQuestion(data)
    .then(question => dispatch(receiveNewQuestion(question)))
    .catch(err => console.log(err))
);

export const fetchQuestion = id => dispatch => (
  getUniqueQuestion(id)
    .then(question => dispatch(receiveQuestion(question)))
    .catch(err => console.log(err))
);

export const updateQuestionField = data => dispatch => {
  return updateQuestion(data)
    .then(question => dispatch(receiveQuestion(question)))
    .catch(err => console.log(err))
}

