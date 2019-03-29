import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { connect } from 'react-redux';

import { CardSection, CustomTextInput, CustomPicker } from '../Main';
import { updateEmployeeField } from '../../store/actions';
import days from '../../screens/AddEmployee/days.json';

class EmployeeForm extends Component {
  updateEmployeeHandler = (name, value) => {
    this.props.updateEmployeeField({ name, value });
  };

  renderPickerItem = () =>
    days.map(day => <Picker.Item key={day} label={day} value={day} />);

  render() {
    const { textStyle, cardSectionStyle } = styles;
    const { name, phone, shift } = this.props;
    return (
      <View>
        <CardSection>
          <CustomTextInput
            label={'Name'}
            placeholder={'Enter name'}
            autoCorrect={false}
            value={name}
            onChangeText={value => this.updateEmployeeHandler('name', value)}
          />
        </CardSection>
        <CardSection>
          <CustomTextInput
            label={'Phone'}
            placeholder={'Enter phone'}
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
      </View>
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
  const { name, phone, shift, loadingAdd } = state.employee;
  return { name, phone, shift, loadingAdd };
};

export default connect(
  mapStateToProps,
  { updateEmployeeField }
)(EmployeeForm);
