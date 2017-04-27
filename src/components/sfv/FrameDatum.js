import React, { Component } from 'react'

import {
  Col,
  Grid,
  Row
} from 'react-native-easy-grid'

import {
  Text
} from 'react-native'

export default class FrameDatum extends Component {
  constructor(props) {
    super(props)
    this.name     = this.props.name
    this.metadata = this.props.metadata
    this.frames   = this.metadata.frames
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Text>{this.name}</Text>
          </Col>
          <Col>
            <Text>{this.metadata.damage}</Text>
          </Col>
          <Col>
            <Text>{this.metadata.stun}</Text>
          </Col>
          <Col>
            <Text>{this.frames.startup}</Text>
          </Col>
          <Col>
            <Text>{this.frames.active}</Text>
          </Col>
          <Col>
            <Text>{this.frames.recovery}</Text>
          </Col>
        </Row>
      </Grid>
    )
  }
}
