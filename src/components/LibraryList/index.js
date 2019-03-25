import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import { ListItem } from '../Main';

class LibraryList extends PureComponent {
  renderLibraryList = () => {
    return this.props.libraries.map(library => <ListItem library={library} />);
  };

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderLibraryList}
        keyExtractor={library => library.id}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
