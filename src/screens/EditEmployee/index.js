import React, { Component } from 'react';
import { connect } from 'react-redux';
import communications from 'react-native-communications';
import _ from 'lodash';

import {
  clearEmployeeState,
  editEmployee,
  removeEmployee,
  updateEmployeeField
} from '../../store/actions';
import EmployeeForm from '../../components/EmployeeForm';
import {
  Card,
  CardSection,
  CustomButton,
  Spinner,
  ConfirmModal
} from '../../components/Main';

class EditEmployee extends Component {
  state = { showModal: false };

  componentDidMount() {
    _.each(this.props.employee, (value, name) => {
      this.props.updateEmployeeField({ name, value });
    });
  }

  componentWillUnmount() {
    this.props.clearEmployeeState();
  }

  editEmployeeHandler = () => {
    const { name, phone, shift } = this.props;
    this.props.editEmployee({
      name,
      phone,
      shift: shift || 'Monday',
      uid: this.props.employee.id
    });
  };

  ediSmsHandler = () => {
    const { phone, shift } = this.props;
    communications.text(phone, `Your current shift is ${shift}.`);
  };

  showModalHandler = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  removeEmployeeHandler = () => {
    const uid = this.props.employee.id;
    this.props.removeEmployee({ uid });
  };

  renderButton = () => {
    const { loadingEdit } = this.props;
    if (loadingEdit) {
      return <Spinner />;
    }
    return (
      <CustomButton onPress={this.editEmployeeHandler} buttonText={'Edit'} />
    );
  };

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>{this.renderButton()}</CardSection>
        <CardSection>
          <CustomButton onPress={this.showModalHandler} buttonText={'Delete'} />
        </CardSection>
        <CardSection>
          <CustomButton onPress={this.ediSmsHandler} buttonText={'Send SMS'} />
        </CardSection>
        <ConfirmModal
          onAccept={this.removeEmployeeHandler}
          onDecline={this.showModalHandler}
          visible={this.state.showModal}
        >
          Are you sure want to delete this?
        </ConfirmModal>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift, loadingEdit, loadingRemove } = state.employee;
  return { name, phone, shift, loadingEdit, loadingRemove };
};

export default connect(
  mapStateToProps,
  { clearEmployeeState, editEmployee, removeEmployee, updateEmployeeField }
)(EditEmployee);
