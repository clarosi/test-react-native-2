import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = props => {
  const { buttonStyle, textStyle } = styles;
  const { onPress, buttonText, style } = props;
  return (
    <TouchableOpacity style={[buttonStyle, style]} onPress={onPress}>
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    paddingTop: 10,
    paddingBottom: 10
  }
});

export { CustomButton };
