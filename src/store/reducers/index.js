import { combineReducers } from 'redux';

import librariesReducer from './libraries';
import authReducer from './auth';

const rootReducer = combineReducers({ librariesReducer, auth: authReducer });

export default rootReducer;
