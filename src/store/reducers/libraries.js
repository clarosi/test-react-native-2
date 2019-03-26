import { DISPLAY_LIBRARIES, SELECT_LIBRARY } from '../actions/types';

import libraries from './libraries.json';

const INITIAL_STATE = {
  libraries,
  libraryId: -1
};

const librariesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISPLAY_LIBRARIES:
      return Object.assign({}, state);
    case SELECT_LIBRARY:
      return Object.assign({}, state, { libraryId: action.id });
    default:
      return state;
  }
};

export default librariesReducer;
