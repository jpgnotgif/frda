import React, { Component } from 'react'

import {
  Body,
  Button,
  Container,
  Content,
  Text,
  Thumbnail
} from 'native-base'

const config = require('../config/defaults')

export default class CharacterFrameData extends Component {
  constructor(props) {
    super(props)
    this.name = this.props.name
    this.imageUrl = this.props.imageUrl
  }

  render() {
    console.log(this.name)
    console.log(this.imageUrl)
    return (
      <Container>
        <Content>
          <Thumbnail large source={{uri: this.imageUrl}} />
          <Text>{this.name}</Text>
        </Content>
      </Container>
    )
  }
}

module.exports = CharacterFrameData
