import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_STARTS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return Object.assign({}, state, { email: action.value });
    case PASSWORD_CHANGED:
      return Object.assign({}, state, { password: action.value });
    case LOGIN_USER_STARTS:
      return Object.assign({}, state, {
        loading: true,
        error: '',
        user: null
      });
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: '',
        user: action.user
      });
    case LOGIN_USER_FAILED:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
        user: null
      });
    default:
      return state;
  }
};

export default authReducer;
