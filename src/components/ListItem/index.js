import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutAnimation,
  Platform,
  UIManager
} from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from '../Main';

class ListItem extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderSubText = text => {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text style={{ paddingLeft: 15 }}>{text}</Text>
        </CardSection>
      );
    }
    return null;
  };

  render() {
    const { id, title, description } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.setLibraryId(id)}>
        <View>
          <CardSection>
            <Text style={style.titleStyle}>{title}</Text>
          </CardSection>
          {this.renderSubText(description)}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const style = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: 'bold'
  }
});

const mapStateToProps = (state, ownProps) => {
  const { librariesReducer } = state;
  const expanded =
    librariesReducer.libraryId === parseInt(ownProps.library.id, 10);
  return { expanded };
};

export default connect(mapStateToProps)(ListItem);
