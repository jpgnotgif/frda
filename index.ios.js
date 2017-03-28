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
  ActivityIndicatorIOS,
} from 'react-native';

const { List } = require('immutable');

const styles = StyleSheet.create({
  shared: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    backgroundColor: '#F5FCFF',
    padding: 100
  },

  character: {
    color: 'purple'
  }
});

const apiUrl = 'http://localhost:3000/sfv/s2'

export default class frda extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      isLoading: true
    }
  }

  fetchData() {
    fetch(`${apiUrl}/characters`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseJson.characters),
        isLoading: false
      })
    })
    .catch((error) => {
      console.error(error)
    })
    .done();
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <View style={[styles.shared, styles.container]}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('frda', () => frda);
