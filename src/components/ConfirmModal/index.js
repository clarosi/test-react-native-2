import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { CardSection, CustomButton } from '../Main';

const ConfirmModal = ({
  children,
  visible,
  onAccept,
  onDecline,
  animationType,
  transparent
}) => {
  const { containerStyle, cardSectionStyle, textStyle } = styles;
  return (
    <Modal
      visible={visible}
      animationType={animationType || 'slide'}
      transparent={transparent || false}
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>
        <CardSection>
          <CustomButton onPress={onAccept} buttonText={'Yes'} />
          <CustomButton onPress={onDecline} buttonText={'No'} />
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    justifyContent: 'center',
    alignSelf: 'center',
    lineHeight: 40
  }
});

export { ConfirmModal };
