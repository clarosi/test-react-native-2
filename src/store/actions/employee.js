import { UPDATE_EMPLOYEE_FIELD } from './types';

export const updateEmployeeField = ({ name, value }) => {
  return {
    type: UPDATE_EMPLOYEE_FIELD,
    payload: { name, value }
  };
};

export const addEmployee = ({ name, phone, shift }) => {
  return dispatch => {};
};
