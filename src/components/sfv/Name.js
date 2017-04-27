import React, { Component } from 'react'
import {
  Text
} from 'native-base'

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
  }

  toPrettyName() {
    if (this.mapping[this.value]) {
      return this.mapping[this.value]
    }
    return this.value
  }

  render() {
    return (
      <Text>
        {this.toPrettyName()}
      </Text>
    )
  }
}
