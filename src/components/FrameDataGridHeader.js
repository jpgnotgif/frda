import React, { Component } from 'react'
import {
  Col,
  Row
} from 'native-base'

import {
  Text
} from 'react-native'

export default class FrameDataGridHeader extends Component {
  render() {
    return (
      <Row>
        <Col><Text>Name</Text></Col>
        <Col><Text>Damage</Text></Col>
        <Col><Text>Stun</Text></Col>
        <Col><Text>Startup</Text></Col>
        <Col><Text>Active</Text></Col>
        <Col><Text>Recovery</Text></Col>
      </Row>
    )
  }
}
