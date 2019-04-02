import React from 'react';
import firebase from 'firebase';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const Drawer = () => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => firebase.auth().signOut()}>
        <Text style={styles.textStyle}>Logout</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    marginTop: 20,
    paddingLeft: 20,
    fontWeight: 'bold'
  }
});

export { Drawer };
