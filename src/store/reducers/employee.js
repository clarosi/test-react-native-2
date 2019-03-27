import { UPDATE_EMPLOYEE_FIELD, ADD_EMPLOYEE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

const employeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEE_FIELD:
      return Object.assign({}, state, {
        [action.payload.name]: action.payload.value
      });
    case ADD_EMPLOYEE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
};

export default employeeReducer;
