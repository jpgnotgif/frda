import React, { Component } from 'react'

import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  StyleProvider,
  Title,
  Thumbnail
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

import getTheme from '../../native-base-theme/components'
import platform from '../../native-base-theme/variables/platform'

import config from '../../config/defaults'
import styles from '../../styles/defaults'

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
    return fetch(`${this.apiUrl}/${this.name}`, {
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

  healthComponent() {
    return (
      <Col style={[styles.footerCol, { borderRightWidth: 2}]}>
        <Row>
          <Text style={[styles.footerTextHeader, styles.footerText]}>Health</Text>
        </Row>
        <Row>
          <Text key="health" style={styles.footerText}>{this.state.metadata.health}</Text>
        </Row>
      </Col>
    )
  }

  stunComponent() {
    return (
      <Col style={styles.footerCol}>
        <Row>
          <Text style={[styles.footerTextHeader, styles.footerText]}>Stun</Text>
        </Row>
        <Row>
          <Text key="stun" style={styles.footerText}>{this.state.metadata.stun}</Text>
        </Row>
      </Col>
    )
  }

  render() {
    const healthComponent = this.healthComponent()
    const stunComponent   = this.stunComponent()
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header>
            <Left>
              <Button transparent
                onPress = {() => this.navigation.goBack(null)}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>
                <Thumbnail small source={{uri: this.imageUrl}} />
              </Title>
            </Body>
          </Header>
          <Content>
            <Text></Text>
          </Content>
          <Footer>
            <FooterTab>
              <Grid>
                { healthComponent }
                { stunComponent }
              </Grid>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    )
  }
}

module.exports = FrameData
