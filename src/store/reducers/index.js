import { combineReducers } from 'redux';

import librariesReducer from './libraries';

const rootReducer = combineReducers({
  libraries: librariesReducer
});

export default rootReducer;
