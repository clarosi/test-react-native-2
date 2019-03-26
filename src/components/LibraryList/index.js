import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';

import ListItem from '../ListItem';
import { selectLibrary } from '../../store/actions';

class LibraryList extends Component {
  setLibraryId = id => {
    this.props.dispatch(selectLibrary(id));
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.props.libraries}
          renderItem={({ item }) => (
            <ListItem
              library={item}
              setLibraryId={id => this.setLibraryId(id)}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { librariesReducer } = state;
  return {
    libraries: librariesReducer.libraries,
    libraryId: librariesReducer.libraryId
  };
};

export default connect(mapStateToProps)(LibraryList);
