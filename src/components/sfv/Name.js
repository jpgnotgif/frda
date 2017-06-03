import React, { Component } from 'react'

import {
  Text
} from 'react-native'

import styles from '../../../styles/defaults'

export default class Name extends Component {
  constructor(props) {
    super(props)
    this.value = this.props.value
    this.mapping = {
      'Chun-li': 'Chun-Li',
      'Fang': 'F.A.N.G',
      'Mbison': 'M. Bison',
      'Rmika': 'R. Mika'
    }
    this.style = this.props.style
  }

  toPrettyName() {
    if (this.mapping[this.value]) {
      return this.mapping[this.value]
    }
    return this.value
  }

  render() {
    // TODO: add check if this.style is null
    return (
      <Text style={[this.style]}>
        {this.toPrettyName()}
      </Text>
    )
  }
}
