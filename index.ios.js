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
  ListView,
} from 'react-native';

const { List } = require('immutable');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 100
  },

  character: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class Characters {
  constructor() {
    this.apiUrl = 'http://localhost:3000/sfv/s2'
  }

  list() {
    return fetch(`${this.apiUrl}/characters`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return List(responseJson.characters);
    })
    .catch((error) => {
      console.error(error);
    });
  }
}

export default class frda extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const rows = ['row 1', 'row 2']

    /*
     * TODO: Figure out why data from
     * API cannot be set in state
    */
    const characters = new Characters()
    const names = characters.list()
      .then((names) => {
        this.setState({names: names})
      })
      .catch((error) => {
        console.log(`error: ${error}`)
      })
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

AppRegistry.registerComponent('frda', () => frda);
