import React, { Component } from 'react'

import {
  Button,
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
    this.name     = _.replace(this.props.name, /_/g, ' ')
    this.imageUrl = this.props.imageUrl
    this.metadata = this.props.metadata
    this.navigation = this.props.navigation
  }

  render() {
    return (
      <ListItem>
        <Button dark transparent onPress={() => {
          this.navigation.navigate(
            'FrameData', {
              name: this.name,
              imageUrl: this.imageUrl,
              metadata: this.metadata
            }
          )
        }}>
        <Text>{this.name}</Text>
        </Button>
      </ListItem>
    )
  }
}
