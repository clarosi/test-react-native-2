import { DISPLAY_LIBRARIES, SELECT_LIBRARY } from './types';

export const diplayLibraries = () => {
  return {
    type: DISPLAY_LIBRARIES
  };
};

export const selectLibrary = id => {
  return {
    id,
    type: SELECT_LIBRARY
  };
};
