import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../../store/actions';

import {
  Card,
  CardSection,
  CustomButton,
  CustomTextInput,
  CustomImageBackground,
  Spinner
} from '../../components/Main';

class LoginForm extends Component {
  onSignInHandler = () => {
    const { email, password } = this.props;
    const loginData = { email, password };
    this.props.loginUser(loginData);
  };

  renderButton = () => {
    const { loading } = this.props;
    if (loading) return <Spinner />;
    return (
      <CustomButton onPress={this.onSignInHandler} buttonText={'SignIn'} />
    );
  };

  renderError = () => {
    const { error } = this.props;
    if (error) return <Text style={styles.textErrorStyle}>{error}</Text>;
    return null;
  };

  render() {
    const { email, password } = this.props;
    return (
      <CustomImageBackground>
        <Card>
          <CardSection>
            <CustomTextInput
              label={'Email'}
              placeholder={'Enter email'}
              autoCorrect={false}
              value={email}
              onChangeText={value => this.props.emailChanged(value)}
            />
          </CardSection>
          <CardSection>
            <CustomTextInput
              secureTextEntry
              label={'Password'}
              placeholder={'Enter password'}
              autoCorrect={false}
              value={password}
              onChangeText={value => this.props.passwordChanged(value)}
            />
          </CardSection>
          <CardSection>{this.renderButton()}</CardSection>
          <CardSection>{this.renderError()}</CardSection>
        </Card>
      </CustomImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  textErrorStyle: {
    flex: 1,
    marginTop: 20,
    fontSize: 18,
    color: 'red'
  }
});

const mapStateToProps = state => {
  const { email, password, loading, error } = state.auth;
  return { email, password, loading, error };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
