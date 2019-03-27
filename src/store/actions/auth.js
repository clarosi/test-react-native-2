import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

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
        loginUserSuccess(dispatch, res.user);
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            loginUserSuccess(dispatch, res.user);
          })
          .catch(err => {
            dispatch({ type: LOGIN_USER_FAILED, error: err.message });
          });
      });
  };
};

const loginUserSuccess = (dispatch, data) => {
  dispatch({ type: LOGIN_USER_SUCCESS, user: data });
  Actions.main();
};
