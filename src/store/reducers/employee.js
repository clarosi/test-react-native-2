import {
  UPDATE_EMPLOYEE_FIELD,
  ADD_EMPLOYEE_STARTS,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILED,
  FETCH_EMPLOYEES_STARTS,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILED,
  EDIT_EMPLOYEE_STARTS,
  EDIT_EMPLOYEE_SUCCESS,
  REMOVE_EMPLOYEE_STARTS,
  REMOVE_EMPLOYEE_SUCCESS,
  CLEAR_EMPLOYEE_STATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
  loadingAdd: false,
  loadingFetch: false,
  loadingEdit: false,
  loadingRemove: false,
  employees: null
};

const employeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_EMPLOYEE_STATE:
      return Object.assign({}, state, {
        ...INITIAL_STATE,
        employees: state.employees
      });
    case UPDATE_EMPLOYEE_FIELD:
      return Object.assign({}, state, {
        [action.payload.name]: action.payload.value
      });
    case REMOVE_EMPLOYEE_STARTS:
      return Object.assign({}, state, { loadingRemove: true });
    case REMOVE_EMPLOYEE_SUCCESS:
      return Object.assign({}, state, { loadingRemove: false });
    case EDIT_EMPLOYEE_STARTS:
      return Object.assign({}, state, editEmployee(true));
    case EDIT_EMPLOYEE_SUCCESS:
      return Object.assign({}, state, editEmployee(false));
    case ADD_EMPLOYEE_STARTS:
      return Object.assign({}, state, employeeAdd(true));
    case ADD_EMPLOYEE_SUCCESS:
      return Object.assign({}, state, employeeAdd(false, INITIAL_STATE));
    case ADD_EMPLOYEE_FAILED:
      return Object.assign({}, state, employeeAdd(false));
    case FETCH_EMPLOYEES_STARTS:
      return Object.assign({}, state, employeesFetch(true, null));
    case FETCH_EMPLOYEES_SUCCESS:
      return Object.assign({}, state, employeesFetch(false, action.payload));
    case FETCH_EMPLOYEES_FAILED:
      return Object.assign({}, state, employeesFetch(false, null));
    default:
      return state;
  }
};

const editEmployee = loadingEdit => {
  return { loadingEdit };
};

const employeeAdd = (loadingAdd, obj) => {
  return {
    loadingAdd,
    ...obj
  };
};

const employeesFetch = (loadingFetch, employees) => {
  return {
    loadingFetch,
    employees
  };
};

export default employeeReducer;
