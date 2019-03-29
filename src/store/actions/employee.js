import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  UPDATE_EMPLOYEE_FIELD,
  ADD_EMPLOYEE_STARTS,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILED,
  FETCH_EMPLOYEES_STARTS,
  FETCH_EMPLOYEES_SUCCESS,
  EDIT_EMPLOYEE_STARTS,
  EDIT_EMPLOYEE_SUCCESS,
  REMOVE_EMPLOYEE_STARTS,
  REMOVE_EMPLOYEE_SUCCESS,
  CLEAR_EMPLOYEE_STATE
} from './types';

export const updateEmployeeField = ({ name, value }) => {
  return {
    type: UPDATE_EMPLOYEE_FIELD,
    payload: { name, value }
  };
};

export const clearEmployeeState = () => {
  return {
    type: CLEAR_EMPLOYEE_STATE
  };
};

export const addEmployee = ({ name, phone, shift }) => {
  return dispatch => {
    dispatch({ type: ADD_EMPLOYEE_STARTS });
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: ADD_EMPLOYEE_SUCCESS });
        Actions.employees({ type: 'reset' });
      })
      .catch(() => dispatch({ type: ADD_EMPLOYEE_FAILED }));
  };
};

export const removeEmployee = ({ uid }) => {
  return dispatch => {
    dispatch({ type: REMOVE_EMPLOYEE_STARTS });
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: REMOVE_EMPLOYEE_SUCCESS });
        dispatch({ type: CLEAR_EMPLOYEE_STATE });
        Actions.employees({ type: 'reset' });
      });
  };
};

export const editEmployee = ({ name, phone, shift, uid }) => {
  return dispatch => {
    dispatch({ type: EDIT_EMPLOYEE_STARTS });
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        console.log('edit success');
        dispatch({ type: EDIT_EMPLOYEE_SUCCESS });
        dispatch({ type: CLEAR_EMPLOYEE_STATE });
        Actions.employees({ type: 'reset' });
      });
  };
};

export const fetchEmployees = () => {
  return dispatch => {
    dispatch({ type: FETCH_EMPLOYEES_STARTS });
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`users/${currentUser.uid}/employees`)
      .on('value', snapShot => {
        dispatch({ type: FETCH_EMPLOYEES_SUCCESS, payload: snapShot.val() });
      });
  };
};
