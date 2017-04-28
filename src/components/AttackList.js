import React, { Component } from 'react'

import {
  Container,
  Content,
  List,
  ListItem,
  StyleProvider,
} from 'native-base'

import {
  StyleSheet,
  Text
} from 'react-native'

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
      metadata: {},
      attacks: {}
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
          metadata: responseJson.metadata,
          attacks: responseJson.attacks
        })
      })
      .catch((error) => { console.log(error) } )
      .done()
  }

  render() {
    const attackNameComponents = []
    _.forEach(this.state.attacks, (attackData, name) => {
      attackNameComponents.push(
        <AttackName
          key={name}
          name={name}
          imageUrl={this.imageUrl}
          metadata={attackData}
          navigation={this.navigation}
        />
      )
    })

    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <NavigationHeader
            name={this.name}
            imageUrl={this.imageUrl}
            navigation={this.navigation}
          />
          <Content>
            <List>
              { attackNameComponents }
            </List>
          </Content>
          <NavigationFooter
            health={this.state.metadata.health}
            stun={this.state.metadata.stun}
          />
        </Container>
      </StyleProvider>
    )
  }
}
