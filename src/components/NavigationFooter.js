import React, { Component } from 'react'

import {
  Body,
  Button,
  Footer,
  FooterTab,
  Icon,
  Left,
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

export default class NavigationFooter extends Component {
  componentWillReceiveProps(props) {
    this.health = props.health
    this.stun   = props.stun
  }

  healthComponent() {
    return (
      <Col style={[styles.footerCol, { borderRightWidth: 2}]}>
        <Row>
          <Text style={[styles.footerTextHeader, styles.footerText]}>Health</Text>
        </Row>
        <Row>
          <Text key="health" style={styles.footerText}>{this.health}</Text>
        </Row>
      </Col>
    )
  }

  stunComponent() {
    return (
      <Col style={styles.footerCol}>
        <Row>
          <Text style={[styles.footerTextHeader, styles.footerText]}>Stun</Text>
        </Row>
        <Row>
          <Text key="stun" style={styles.footerText}>{this.stun}</Text>
        </Row>
      </Col>
    )
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Grid>
            { this.healthComponent() }
            { this.stunComponent() }
          </Grid>
        </FooterTab>
      </Footer>
    )
  }
}
