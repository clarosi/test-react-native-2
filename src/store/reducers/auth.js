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
      return Object.assign({}, state, { email: action.value, error: '' });
    case PASSWORD_CHANGED:
      return Object.assign({}, state, { password: action.value, error: '' });
    case LOGIN_USER_STARTS:
      return Object.assign({}, state, setLoginState(true, '', null));
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, setLoginState(false, '', action.user));
    case LOGIN_USER_FAILED:
      return Object.assign({}, state, setLoginState(false, action.error, null));
    default:
      return state;
  }
};

const setLoginState = (loading, error, user) => {
  return {
    loading,
    error,
    user
  };
};

export default authReducer;
