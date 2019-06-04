import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import questions from './questions_reducer';
import modal from './modal_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  questions,
  modal
})

export default RootReducer;