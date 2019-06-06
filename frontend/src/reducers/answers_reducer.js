import {
    // RECEIVE_ANSWER,
    RECEIVE_ANSWERS,
    RECEIVE_NEW_ANSWER
} from '../actions/answer_actions';

const AnswerReducer = (state = { all: {}, answer: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ANSWERS:
            newState.all = action.answers.data;
            return newState;
        case RECEIVE_NEW_ANSWER:
            newState.new = action.answer.data;
            return newState;
        default:
            return state;
    }
};

export default AnswerReducer;