import { DISPLAY_LIBRARIES, SELECT_LIBRARY } from '../actions/actionTypes';

import libraries from './libraries.json';

const librariesReducer = (state = libraries, action) => {
  switch (action.type) {
    case DISPLAY_LIBRARIES:
      return Object.assign([], state);
    case SELECT_LIBRARY:
      return Object.assign([], state);
    default:
      return state;
  }
};

export default librariesReducer;
