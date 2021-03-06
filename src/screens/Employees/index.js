import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { fetchEmployees } from '../../store/actions';
import {
  Spinner,
  Employeelist,
  CustomImageBackground
} from '../../components/Main';

class Employee extends Component {
  componentWillMount() {
    // Do nothing
  }

  componentDidMount() {
    this.props.fetchEmployees();
  }

  renderEmployees = () => {
    const { loadingFetch, employees } = this.props;
    if (loadingFetch) {
      return <Spinner />;
    }
    return <Employeelist employees={employees} />;
  };

  render() {
    return (
      <CustomImageBackground>
        <View style={{ marginTop: 50 }}>{this.renderEmployees()}</View>
      </CustomImageBackground>
    );
  }
}

const mapStateToProps = state => {
  const { loadingFetch, employees } = state.employee;
  return { loadingFetch, employees };
};

export default connect(
  mapStateToProps,
  { fetchEmployees }
)(Employee);
