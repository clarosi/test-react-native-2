import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { CardSection } from '../Main';

const ListItem = props => {
  const { title } = props.library;
  return (
    <CardSection>
      <Text style={style.titleStyle}>{title}</Text>
    </CardSection>
  );
};

const style = StyleSheet.create({
  titleStyle: {
    fontSize: 16,
    paddingLeft: 20
  }
});

export { ListItem };
