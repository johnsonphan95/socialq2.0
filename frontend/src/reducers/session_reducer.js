import { RECEIVE_CURRENT_USER, 
        LOGOUT_USER,
        LOGIN_USER } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case LOGOUT_USER:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case LOGIN_USER:
      return {
        ...state,
        isSignedIn: true
      };
    default:
      return state;
  }
}