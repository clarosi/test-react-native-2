import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = props => {
  const { container } = style;
  return <View style={container}>{props.children}</View>;
};

const style = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});

export { CardSection };
