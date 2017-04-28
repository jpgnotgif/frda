import React, { Component } from 'react'

import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Thumbnail,
  Title
} from 'native-base'

import {
  Text
} from 'react-native'

import {
  Col,
  Grid,
  Row
} from 'react-native-easy-grid'

import styles from '../../styles/defaults'
import Name   from './sfv/Name'

export default class NavigationHeader extends Component {
  constructor(props) {
    super(props)
    this.navigation = this.props.navigation
    this.name       = this.props.name
    this.imageUrl   = this.props.imageUrl
  }

  render() {
    return (
      <Header>
        <Left>
          <Button transparent
            onPress = {() => this.navigation.goBack(null)}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Name value={this.name} />
        </Body>
        <Right>
          <Thumbnail small source={{uri: this.imageUrl}} />
        </Right>
      </Header>
    )
  }
}
