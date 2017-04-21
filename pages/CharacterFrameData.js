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
  Text,
  Title,
  Thumbnail
} from 'native-base'

import getTheme from '../native-base-theme/components'
import platform from '../native-base-theme/variables/platform'

const config = require('../config/defaults')

export default class CharacterFrameData extends Component {
  constructor(props) {
    super(props)
    this.navigation = this.props.navigation
    this.name       = this.navigation.state.params.name
    this.imageUrl   = this.navigation.state.params.imageUrl
  }

  render() {
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
            <Text>Add Frame Data here</Text>
          </Content>
          <Footer>
            <FooterTab>
              <Text full>{this.name}</Text>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    )
  }
}

module.exports = CharacterFrameData
