import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  const { container } = style;
  return <View style={container}>{props.children}</View>;
};

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

export { Card };
