import React, { Component } from 'react'

import {
  ListItem
} from 'native-base'

import {
  Text
} from 'react-native'

import _ from 'lodash'

import styles from '../../styles/defaults'

export default class AttackName extends Component {
  constructor(props) {
    super(props)
    this.name     = _.replace(this.props.name, '_', ' ')
    this.metadata = this.props.metadata
  }

  render() {
    return (
      <ListItem>
        <Text>{this.name}</Text>
      </ListItem>
    )
  }
}
