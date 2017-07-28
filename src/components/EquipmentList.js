import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { equipmentFetch } from '../actions';

class EquipmentList extends Component {
  componentWillMount() {
    this.props.equipmentFetch(); // this tell action creator to fetch list equipments

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with 
    // this.props is still the old set of props.

    this.createDataSource(nextProps);
  }

  // create another helper
  createDataSource({ equipments }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(equipments);
  }

  render() {
    return (
      <View>
        <Text>Equipment List</Text>
        <Text>Equipment List</Text>
        <Text>Equipment List</Text>
        <Text>Equipment List</Text>
        <Text>Equipment List</Text>
        <Text>Equipment List</Text>
      </View>
    );
  }
} 

const mapStateToProps = state => {
  const equipments = _.map(state.equipments, (val, uid) => {
    return { ...val, uid };    
  });

  return { equipments }
};

export default connect(mapStateToProps, { equipmentFetch }) (EquipmentList); 

