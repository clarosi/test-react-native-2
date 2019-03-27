import React, { Component } from 'react';
import { Picker, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { updateEmployeeField } from '../../store/actions';
import days from './days.json';

import {
  Card,
  CardSection,
  CustomTextInput,
  CustomButton,
  CustomPicker
} from '../../components/Main';

class AddEmployee extends Component {
  updateEmployeeHandler = (name, value) => {
    this.props.updateEmployeeField({ name, value });
  };

  renderPickerItem = () =>
    days.map(day => <Picker.Item key={day} label={day} value={day} />);

  render() {
    const { textStyle, cardSectionStyle } = styles;
    const { name, phone, shift } = this.props;
    return (
      <Card>
        <CardSection>
          <CustomTextInput
            label={'Name'}
            placeholder={'Ian R. Claros'}
            autoCorrect={false}
            value={name}
            onChangeText={value => this.updateEmployeeHandler('name', value)}
          />
        </CardSection>
        <CardSection>
          <CustomTextInput
            label={'Phone'}
            placeholder={'phone'}
            autoCorrect={false}
            value={phone}
            onChangeText={value => this.updateEmployeeHandler('phone', value)}
          />
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>Shift</Text>
          <CustomPicker
            selectedValue={shift}
            style={{ height: 50 }}
            onValueChange={value => this.updateEmployeeHandler('shift', value)}
          >
            {this.renderPickerItem()}
          </CustomPicker>
        </CardSection>
        <CardSection>
          <CustomButton
            onPress={() => console.log('Create')}
            buttonText={'Create'}
          />
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  cardSectionStyle: { flexDirection: 'column' }
});

const mapStateToProps = state => {
  const { name, phone, shift } = state.employee;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { updateEmployeeField }
)(AddEmployee);
