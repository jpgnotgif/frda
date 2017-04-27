import React, { Component } from 'react'

import {
  Container,
  Content,
  StyleProvider,
} from 'native-base'

import {
  StyleSheet,
  Text
} from 'react-native'

import {
  Col,
  Grid,
  Row
} from 'react-native-easy-grid'

import {
  List,
  OrderedMap,
} from 'immutable'

import getTheme from '../../native-base-theme/components'
import platform from '../../native-base-theme/variables/platform'

import config from '../../config/defaults'
import styles from '../../styles/defaults'

import FrameDataHeader from './FrameDataHeader'
import FrameDataFooter from './FrameDataFooter'
import FrameDatum      from './sfv/FrameDatum'

export default class FrameData extends Component {
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

  createFrameData() {
    const attacks = this.state.attacks
    const frameDatums = []

    for (name in attacks) {
      frameDatums.push(
        <FrameDatum key={name} name={name} metadata={attacks[name]} />
      )
    }

    return frameDatums
  }

  render() {
    const frameData = this.createFrameData()
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <FrameDataHeader
            name={this.name}
            imageUrl={this.imageUrl}
            navigation={this.navigation}
          />
          <Content>
            { frameData }
          </Content>
          <FrameDataFooter
            health={this.state.metadata.health}
            stun={this.state.metadata.stun}
          />
        </Container>
      </StyleProvider>
    )
  }
}

module.exports = FrameData
