import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { name } = this.props.equipment;

    return (
      <CardSection>
        <Text style={styles.titleStyle} >
          {name}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    backgroundColor: '#888'
  }
};

export default ListItem;