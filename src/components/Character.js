import React, { Component } from 'react'

import {
  Body,
  Button,
  Left,
  ListItem,
  Text,
  Thumbnail
} from 'native-base'

const config = require('../../config/defaults')

export default class Character extends Component {
  constructor(props) {
    super(props)
    this.name          = this.props.name
    this.imageUrl      = this.props.imageUrl
    this.navigation    = this.props.navigation
    this.routeMetadata = this.props.routeMetadata
  }

  render() {
    return (
      <ListItem avatar>
        <Left>
          <Button dark transparent onPress={() => {
            this.navigation.navigate(
              'FrameData', {
                name: this.name,
                imageUrl: this.imageUrl
              })
            }} >
            <Thumbnail medium source={{uri: this.imageUrl}} />
          </Button>
        </Left>
        <Body>
          <Button dark transparent onPress={() => {
            this.navigation.navigate(
              'CharacterFrameData', {
                name: this.name,
                imageUrl: this.imageUrl
              })
            }} >
            <Text>{this.name}</Text>
          </Button>
        </Body>
      </ListItem>
    )
  }
}

module.exports = Character
