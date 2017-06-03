import React, { Component } from 'react'

import {
  Button,
  ListItem
} from 'native-base'

import {
  Text
} from 'react-native'

import styles from '../../styles/defaults'

export default class AttackName extends Component {
  constructor(props) {
    super(props)
    this.name     = _.replace(this.props.name, /_/g, '.')
    this.imageUrl = this.props.imageUrl
    this.metadata = this.props.metadata
    this.navigation = this.props.navigation
  }

  normalize() {
    const moveName = this.name.split('.').slice(-1)[0]

    console.log(`-> ${this.name}`)

    if (/stand/.test(this.name)) {
      return `st.${moveName}`
    } else if (/crouch/.test(this.name)) {
        return `cr.${moveName}`
    } else if (/jump\.+/.test(this.name)) {
        return `j.${moveName}`.replace(/j\.(forward|backward)/, (match, string, offset) => {
          if ((/forward/).test(string)) {
            return 'j.f'
          }
          return 'j.b'
        })
    } else if (/jump/.test(this.name)) {
        return 'j.'
    } else if (/dash/.test(this.name)) {
        return `d.${moveName}`.replace(/d\.(forward|backward)/, (match, string, offset) => {
          if ((/forward/).test(string)) {
            return 'd.f'
          }
          return 'd.b'
        })
    }
    return moveName
  }

  render() {
    return (
      <Text key='name' style={{fontSize: 10, paddingRight: 10}}>
        { this.normalize() }
      </Text>
    )
  }
}
