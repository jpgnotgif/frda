import React, { Component } from 'react'
import {
  Body,
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

  render() {
    return (
      <ListItem avatar>
        <Left>
          <Thumbnail small source={{uri: this.imageUrl}} />
        </Left>
        <Body>
          <Text>{this.name}</Text>
        </Body>
      </ListItem>
    )
  }
}

module.exports = Character
