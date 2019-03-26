import firebase from 'firebase';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_STARTS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from './types';

export const emailChanged = value => {
  return {
    value,
    type: EMAIL_CHANGED
  };
};

export const passwordChanged = value => {
  return {
    value,
    type: PASSWORD_CHANGED
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER_STARTS });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        dispatch({ type: LOGIN_USER_SUCCESS, user: res.data });
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            dispatch({ type: LOGIN_USER_SUCCESS, user: res.data });
          })
          .catch(err => {
            dispatch({ type: LOGIN_USER_FAILED, error: err.message });
          });
      });
  };
};
