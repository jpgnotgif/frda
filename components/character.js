import React, { Component } from 'react'
import {
  Body,
  Button,
  Left,
  ListItem,
  Text,
  Thumbnail
} from 'native-base'

const config = require('../config/defaults')

export default class Character extends Component {
  constructor(props) {
    super(props)
    this.name = this.props.name
    this.imageUrl = this.props.imageUrl
  }

  loadCharacterFrames(name) {
    console.log(`name: ${name}`)
  }

  render() {
    return (
      <ListItem avatar>
        <Left>
          <Button onPress={() => this.loadCharacterFrames(this.name)} dark transparent>
            <Thumbnail medium source={{uri: this.imageUrl}} />
          </Button>
        </Left>
        <Body>
          <Button onPress={() => this.loadCharacterFrames(this.name)} dark transparent>
            <Text>{this.name}</Text>
          </Button>
        </Body>
      </ListItem>
    )
  }
}

module.exports = Character
