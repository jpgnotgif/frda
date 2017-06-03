import React, { Component } from 'react'

import {
  Body,
  Button,
  Left,
  ListItem,
  Thumbnail
} from 'native-base'

import config from '../../config/defaults'
import Name   from './sfv/Name'

import styles from '../../styles/defaults'

export default class Character extends Component {
  constructor(props) {
    super(props)
    this.name          = this.props.name
    this.imageUrl      = this.props.imageUrl
    this.navigation    = this.props.navigation
  }

  render() {
    return (
      <ListItem avatar onPress={() => {
        this.navigation.navigate(
          'AttackList', {
            name: this.name,
            imageUrl: this.imageUrl
          })
        }} style={{ padding: 14 }}>
        <Left>
          <Thumbnail medium source={{uri: this.imageUrl}} />
        </Left>
        <Body>
          <Name value={this.name} style={styles.listItem}/>
        </Body>
      </ListItem>
    )
  }
}
