import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appx from './src/Appx';

/*class Appx extends React.Component {
  render() {
    return (
      <View>
        <Appx />
      </View>
    );
  }
}*/

Expo.registerRootComponent(Appx);
