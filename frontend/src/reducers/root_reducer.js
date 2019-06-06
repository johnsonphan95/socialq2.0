import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import questions from './questions_reducer';
import modal from './modal_reducer';
import answers from './answers_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  questions,
  modal, 
  answers
})

export default RootReducer;