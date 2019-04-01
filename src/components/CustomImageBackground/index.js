import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const CustomImageBackground = props => {
  const { children, style, uri } = props;
  const { imageStyle } = styles;
  return (
    <ImageBackground
      source={{
        uri:
          uri ||
          'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
      }}
      style={[imageStyle, style]}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: '100%'
  }
});

export { CustomImageBackground };
