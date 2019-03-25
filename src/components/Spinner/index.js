import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ size, color }) => {
  return (
    <View style={style.mainContainerStyle}>
      <ActivityIndicator size={size || 'large'} color={color || '#0000ff'} />
    </View>
  );
};

const style = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { Spinner };
