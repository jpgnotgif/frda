import React, { Component } from 'react'
import {
  Text
} from 'react-native'

import {
  Container,
} from 'native-base'

import {
  OrderedMap
} from 'immutable'

import NavigationHeader from './NavigationHeader'
import FrameDatum       from './FrameDatum'

import styles from '../../styles/defaults'

export default class FrameData extends Component {
  constructor(props) {
    super(props)
    this.navigation       = this.props.navigation
    this.navigationParams = this.navigation.state.params
    this.name             = this.navigationParams.name
    this.imageUrl         = this.navigationParams.imageUrl
    this.metadata         = this.navigationParams.metadata
    this.frames           = this.metadata.frames
    this.dataMapping = OrderedMap({
      'Damage': this.metadata.damage,
      'Stun': this.metadata.stun,
      'Startup': this.frames.startup,
      'Active': this.frames.active,
      'Recovery': this.frames.recovery,
      'H.Adv': this.frames.hit_advantage,
      'B.Adv': this.frames.block_advantage
    })
  }

  render() {
    return (
      <Container>
        <NavigationHeader
          name={this.name}
          imageUrl={this.imageUrl}
          navigation={this.navigation}
        />
        {
          this.dataMapping.map((datum, name) => {
            return <FrameDatum
              key={name}
              name={name}
              datum={datum}
            />
          }).toList()
        }
      </Container>
    )
  }
}
