import React, { Component } from 'react'

import {
  Container,
  Content,
  List as NativeBaseList,
  ListItem,
  StyleProvider,
} from 'native-base'

import {
  StyleSheet,
  Text
} from 'react-native'

import {
  List,
  OrderedMap
} from 'immutable'

import _ from 'lodash'
import getTheme from '../../native-base-theme/components'
import platform from '../../native-base-theme/variables/platform'

import config from '../../config/defaults'
import styles from '../../styles/defaults'

import NavigationHeader from './NavigationHeader'
import NavigationFooter from './NavigationFooter'
import AttackName       from './AttackName'
import FrameDatum       from './FrameDatum'

export default class AttackList extends Component {
  constructor(props) {
    super(props)
    this.apiUrl           = config.sfv.url
    this.navigation       = this.props.navigation
    this.navigationParams = this.navigation.state.params
    this.name             = this.navigationParams.name
    this.imageUrl         = this.navigationParams.imageUrl
    this.state = {
      metadata: OrderedMap(),
      attacks: OrderedMap()
    }
  }

  load() {
    return fetch(`${this.apiUrl}/${this.name}?normals=true`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentDidMount() {
    this.load()
      .then((responseJson) => {
        this.setState({
          metadata: OrderedMap(responseJson.metadata),
          attacks: OrderedMap(responseJson.attacks)
        })
      })
      .catch((error) => { console.log(error) } )
      .done()
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <NavigationHeader
            name={this.name}
            imageUrl={this.imageUrl}
            navigation={this.navigation}
          />
          <Content>
            <NativeBaseList>
              {
                this.state.attacks.map((attackData, name) => {
                  return <AttackName
                    key={name}
                    name={name}
                    imageUrl={this.imageUrl}
                    metadata={attackData}
                    navigation={this.navigation}
                  />
                }).toList()
              }
            </NativeBaseList>
          </Content>
          <NavigationFooter
            health={this.state.metadata.get('health')}
            stun={this.state.metadata.get('stun')}
          />
        </Container>
      </StyleProvider>
    )
  }
}
