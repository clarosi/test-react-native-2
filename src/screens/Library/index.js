import React, { Component } from 'react';
import firebase from 'firebase';

import LibraryList from '../../components/LibraryList';
import { CustomButton, Card, CardSection } from '../../components/Main';

class Library extends Component {
  render() {
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
  }
}

export default Library;
