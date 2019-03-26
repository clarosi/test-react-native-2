import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import * as config from '../firebase.json';
import LibraryList from './components/LibraryList';
import {
  Header,
  Spinner,
  CustomButton,
  Card,
  CardSection
} from './components/Main';
import LoginForm from './screens/LoginForm';
import store from './store';

class App extends Component {
  state = { isLoggedIn: null };

  componentDidMount() {
    if (!this.state.isLoggedIn) {
      firebase.initializeApp(config);
    }
    firebase.auth().onAuthStateChanged(user => {
      if (user) return this.setState({ isLoggedIn: true });
      this.setState({ isLoggedIn: false });
    });
  }

  renderContent = () => {
    switch (this.state.isLoggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <CustomButton
                onPress={() => firebase.auth().signOut()}
                buttonText={'SignOut'}
              />
            </CardSection>
            <LibraryList />
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  };

  render() {
    return (
      <Provider store={store}>
        <View>
          <Header headerText={'Lexus Leaders 2019'} />
          <View style={{ marginTop: 50 }}>{this.renderContent()}</View>
        </View>
      </Provider>
    );
  }
}

export default App;
