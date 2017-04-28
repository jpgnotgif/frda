import React, { Component } from 'react'

import {
  Body,
  Button,
  Left,
  ListItem,
  Text,
  Thumbnail
} from 'native-base'

import config from '../../config/defaults'
import Name   from './sfv/Name'

export default class Character extends Component {
  constructor(props) {
    super(props)
    this.name          = this.props.name
    this.imageUrl      = this.props.imageUrl
    this.navigation    = this.props.navigation
  }

  render() {
    return (
      <ListItem avatar>
        <Left>
          <Button dark transparent onPress={() => {
            this.navigation.navigate(
              'AttackList', {
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
              'AttackList', {
                name: this.name,
                imageUrl: this.imageUrl
              })
            }} >
            <Name value={this.name} />
          </Button>
        </Body>
      </ListItem>
    )
  }
}
