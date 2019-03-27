import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import * as config from '../firebase.json';
import Router from './navigation/Router';
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

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
