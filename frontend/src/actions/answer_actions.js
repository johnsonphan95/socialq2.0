import {
    writeAnswer, 
    getSpecificAnswers, 
    getQuestionAnswers
} from '../util/answer_api_util';

export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const RECEIVE_ANSWERS = "RECEIVE_ANSWERS";
export const RECEIVE_NEW_ANSWER = "RECEIVE_NEW_ANSWER"

export const receiveAnswer = answer => ({
    type: RECEIVE_ANSWER,
    answer
});

export const receiveAnswers = answers => ({
    type: RECEIVE_ANSWERS, 
    answers
})

export const receiveNewAnswer = answer => ({
    type: RECEIVE_NEW_ANSWER, 
    answer
})

export const createAnswer = data => dispatch => (
    writeAnswer(data)
        .then(answer => dispatch(receiveNewAnswer(answer)))
        .catch(err => console.log(err))
);

export const fetchSpecificAnswers = (data) => dispatch (
    getSpecificAnswers(data)
        .then(answers => dispatch(receiveAnswers(answers)))
        .catch(err => console.log(err))
)

export const fetchQuestionAnswers = (data) => dispatch (
    getQuestionAnswers(data)
        .then(answers => dispatch(receiveAnswers(answers)))
        .catch(err => console.log(err))
)

