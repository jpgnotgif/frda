import React, { Component } from 'react';
import {
  ActivityIndicatorIOS,
  AppRegistry,
  ListView,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const config        = require("./config/defaults");
const Character     = require("./components/character");
const CharacterList = require('./components/character-list');

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 40
  }
});

export default class frda extends Component {
  constructor() {
    super()
    this.characterList = new CharacterList()
    this.state = {
      dataSource:  new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      isLoading: true
    }
  }

  componentDidMount() {
    this.characterList.load()
      .then((names) => {
        names.forEach((name) => {
          console.log(`${config.assets.url}/${name}.png`)
        })

        const slice = [
          names[0],
          names[1],
          names[2],
          names[3],
          names[4],
        ]

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(slice),
          isLoading: false
        })
      })
      .catch((error) => { console.log(error) })
      .done()
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          horizontal={true}
          dataSource={this.state.dataSource}
          renderRow={(name) =>
            <View style={{padding: 10}}>
              <Image source={{uri: `${config.assets.url}/${name}.png`}}
                style={{width: 40, height: 40}} />
            </View>
          }
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('frda', () => frda)
