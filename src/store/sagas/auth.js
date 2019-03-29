import { put } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import {
  LOGIN_USER_STARTS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from '../actions/types';

export function* loginUserSaga({ email, password }) {
  yield put({ type: LOGIN_USER_STARTS });
  try {
    const res = yield firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    yield put({ type: LOGIN_USER_SUCCESS, user: res });
    yield Actions.main();
  } catch (err1) {
    try {
      const res = yield firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      yield put({ type: LOGIN_USER_SUCCESS, user: res });
    } catch (err2) {
      yield put({ type: LOGIN_USER_FAILED, error: err2.message });
      yield Actions.main();
    }
  }
}
