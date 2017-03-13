/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class refactoryproject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.myName}>
          Bagus Aji Santoso
        </Text>
        <Image style={styles.myImage} source={{uri: 'https://en.gravatar.com/userimage/25928647/695aa5fa7ac7077f8769db9107c307c9.png?size=200'}}/>
        <Text style={styles.myBatch}>
          Batch #2
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  myName: {
    fontSize: 34,
    textAlign: 'center',
    margin: 10,
  },
  myImage: {
    height:240,
    width: 240
  },
  myBatch: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 20
  },
});

AppRegistry.registerComponent('refactoryproject', () => refactoryproject);
