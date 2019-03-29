import { takeEvery } from 'redux-saga/effects';

import { INICIATE_LOGIN_USER } from '../actions/types';
import { loginUserSaga } from './auth';

export function* watchLoginUser() {
  // you may use takeLatest
  yield takeEvery(INICIATE_LOGIN_USER, loginUserSaga);
}
