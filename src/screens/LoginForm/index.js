import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

import {
  Card,
  CardSection,
  CustomButton,
  CustomTextInput,
  Spinner
} from '../../components/Main/';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    isLoading: false
  };

  onSignInHandler = () => {
    const { email, password } = this.state;
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
            placeholder={'Enter email.'}
            autoCorrect={false}
            value={this.state.email}
            onChangeText={value => this.setState({ email: value })}
          />
        </CardSection>
        <CardSection>
          <CustomTextInput
            secureTextEntry
            label={'Password'}
            placeholder={'Enter password.'}
            autoCorrect={false}
            value={this.state.password}
            onChangeText={value => this.setState({ password: value })}
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

export default LoginForm;
