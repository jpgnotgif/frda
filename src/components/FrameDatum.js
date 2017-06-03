import React, { Component } from 'react'

import {
  Body,
  Container,
  Left,
  ListItem
} from 'native-base'

import {
  Text
} from 'react-native'

import styles from '../../styles/defaults'

export default class FrameDatum extends Component {
  constructor(props) {
    super(props)
    this.name  = this.props.name
    this.datum = this.props.datum
  }

  render() {
    return (
      <ListItem>
        <Left>
          <Text style={[styles.headerItem]}>
            {this.name}
          </Text>
          <Body>
            <Text style={[styles.text, styles.alignRight]}>
              {this.datum}
            </Text>
          </Body>
        </Left>
      </ListItem>
    )
  }
}
