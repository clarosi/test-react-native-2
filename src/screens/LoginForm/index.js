import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';

import { emailChanged, passwordChanged, loginUser } from '../../store/actions';

import {
  Card,
  CardSection,
  CustomButton,
  CustomTextInput,
  Spinner
} from '../../components/Main';

class LoginForm extends Component {
  state = {
    error: '',
    isLoading: false
  };

  onSignInHandler = () => {
    const { email, password } = this.props;
    this.setStateData('', true, null);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.setStateData('', false, res);
        this.loginSuccess();
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            this.setStateData('', false, res);
            this.loginSuccess();
          })
          .catch(err => this.setStateData(err.message, false, err));
      });
  };

  setStateData = (error, isLoading, data) => {
    console.log(data);
    this.setState({
      error,
      isLoading
    });
  };

  loginSuccess = () => {};

  renderButton = () => {
    if (this.state.isLoading) return <Spinner />;
    return (
      <CustomButton onPress={this.onSignInHandler} buttonText={'SignIn'} />
    );
  };

  renderError = () => {
    if (this.state.error) {
      return <Text style={styles.textErrorStyle}>{this.state.error}</Text>;
    }
    return null;
  };

  render() {
    return (
      <Card>
        <CardSection>
          <CustomTextInput
            label={'Email'}
            placeholder={'email@gmail.com'}
            autoCorrect={false}
            value={this.props.email}
            onChangeText={value => this.props.emailChanged(value)}
          />
        </CardSection>
        <CardSection>
          <CustomTextInput
            secureTextEntry
            label={'Password'}
            placeholder={'password.'}
            autoCorrect={false}
            value={this.props.password}
            onChangeText={value => this.props.passwordChanged(value)}
          />
        </CardSection>
        <CardSection>{this.renderButton()}</CardSection>
        {this.renderError()}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  textErrorStyle: {
    marginTop: 20,
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  }
});

const mapStateToProps = state => {
  const { email, password } = state.auth;
  return { email, password };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
