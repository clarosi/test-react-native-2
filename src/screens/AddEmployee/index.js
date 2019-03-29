import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addEmployee, clearEmployeeState } from '../../store/actions';
import EmployeeForm from '../../components/EmployeeForm';
import {
  Card,
  CardSection,
  CustomButton,
  Spinner
} from '../../components/Main';

class AddEmployee extends Component {
  componentWillUnmount() {
    this.props.clearEmployeeState();
  }

  addEmployeeHandler = () => {
    const { name, phone, shift } = this.props;
    this.props.addEmployee({ name, phone, shift: shift || 'Monday' });
  };

  renderButton = () => {
    const { loadingAdd } = this.props;
    if (loadingAdd) {
      return <Spinner />;
    }
    return (
      <CustomButton onPress={this.addEmployeeHandler} buttonText={'Add'} />
    );
  };

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift, loadingAdd } = state.employee;
  return { name, phone, shift, loadingAdd };
};

export default connect(
  mapStateToProps,
  { addEmployee, clearEmployeeState }
)(AddEmployee);
