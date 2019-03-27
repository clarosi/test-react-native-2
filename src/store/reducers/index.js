import { combineReducers } from 'redux';

import librariesReducer from './libraries';
import authReducer from './auth';
import employeeReducer from './employee';

const rootReducer = combineReducers({
  librariesReducer,
  auth: authReducer,
  employee: employeeReducer
});

export default rootReducer;
