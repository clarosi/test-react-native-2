import React from 'react';
import { Picker } from 'react-native';

const CustomPicker = props => {
  const { style } = props;
  return (
    <Picker {...props} style={[{ height: 50, width: '100%' }, style]}>
      {props.children}
    </Picker>
  );
};

export { CustomPicker };
