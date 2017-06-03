import React, { Component } from 'react'

import {
  Container,
  Content,
  List as NativeBaseList,
  ListItem,
  StyleProvider,
} from 'native-base'

import {
  StyleSheet,
  Text
} from 'react-native'

import {
  List,
  OrderedMap
} from 'immutable'

import {
  Col,
  Grid,
  Row
} from 'react-native-easy-grid'

import getTheme from '../../native-base-theme/components'
import platform from '../../native-base-theme/variables/platform'

import config from '../../config/defaults'
import styles from '../../styles/defaults'

import NavigationHeader from './NavigationHeader'
import NavigationFooter from './NavigationFooter'
import AttackName       from './AttackName'
import FrameDatum       from './FrameDatum'

export default class AttackList extends Component {
  constructor(props) {
    super(props)
    this.apiUrl           = config.sfv.url
    this.navigation       = this.props.navigation
    this.navigationParams = this.navigation.state.params
    this.name             = this.navigationParams.name
    this.imageUrl         = this.navigationParams.imageUrl
    this.state = {
      metadata: OrderedMap(),
      attacks: OrderedMap()
    }
  }

  load() {
    return fetch(`${this.apiUrl}/${this.name}?normals=true`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentDidMount() {
    this.load()
      .then((responseJson) => {
        this.setState({
          metadata: OrderedMap(responseJson.metadata),
          attacks: OrderedMap(responseJson.attacks)
        })
      })
      .catch((error) => { console.log(error) } )
      .done()
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <NavigationHeader
            name={this.name}
            imageUrl={this.imageUrl}
            navigation={this.navigation}
          />
          <Content>
            <NativeBaseList>
              <Grid style={{paddingTop: 14, paddingRight: 2, paddingBottom: 8, paddingLeft: 20}}>
                <Row>
                  <Col><Text style={styles.smallText}>Name</Text></Col>
                  <Col><Text style={styles.smallText}>Dmg</Text></Col>
                  <Col><Text style={styles.smallText}>St</Text></Col>
                  <Col><Text style={styles.smallText}>S</Text></Col>
                  <Col><Text style={styles.smallText}>A</Text></Col>
                  <Col><Text style={styles.smallText}>R</Text></Col>
                  <Col><Text style={styles.smallText}>H.Adv</Text></Col>
                  <Col><Text style={styles.smallText}>B.Adv</Text></Col>
                </Row>
                {
                  this.state.attacks.map((attackData, name) => {
                    return (
                      <Row key={name}>
                        <Col>
                          <AttackName name={name} />
                        </Col>
                        <Col>
                          <Text key='damage' style={styles.smallText}>
                            {attackData.damage}
                          </Text>
                        </Col>
                        <Col>
                          <Text key='stun' style={styles.smallText}>
                            {attackData.stun}
                          </Text>
                        </Col>
                        <Col>
                          <Text key='startup' style={styles.smallText}>
                            {attackData.frames.startup}
                          </Text>
                        </Col>
                        <Col>
                          <Text key='active' style={styles.smallText}>
                            {attackData.frames.active}
                          </Text>
                        </Col>
                        <Col>
                          <Text key='recovery' style={styles.smallText}>
                            {attackData.frames.recovery}
                          </Text>
                        </Col>
                        <Col>
                          <Text key='hit-advantage' style={styles.smallText}>
                            {attackData.frames.hit_advantage}
                          </Text>
                        </Col>
                        <Col>
                          <Text key='block-advantage' style={styles.smallText}>
                            {attackData.frames.block_advantage}
                          </Text>
                        </Col>
                      </Row>
                    )
                  }).toList()
                }
              </Grid>

            </NativeBaseList>
          </Content>
          <NavigationFooter
            health={this.state.metadata.get('health')}
            stun={this.state.metadata.get('stun')}
          />
        </Container>
      </StyleProvider>
    )
  }
}
