import React, { Component } from 'react';

import {
  Body,
  Container,
  Content,
  Left,
  ListItem,
  Right,
  Spinner,
  Text,
  Thumbnail,
} from 'native-base';

import { AppRegistry } from 'react-native'

const { Seq } = require('immutable')

const config        = require('./config/defaults')
const styles        = require('./styles/defaults')
const Character     = require('./components/character')
const CharacterList = require('./components/character-list')

export default class frda extends Component {
  constructor() {
    super()
    this.characterList = new CharacterList()
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    this.characterList.load()
      .then((names) => {
        const characters = {}
        names.forEach((name) => {
          characters[name] = `${config.assets.url}/${name}.png`
        })

        this.setState({
          data: characters
        })

      })
      .catch((error) => { console.log(error) })
      .done()
  }

  createCharactersComponent() {
    const characterComponents = []
    for (name in this.state.data) {
      characterComponents.push(
        <Character name={name} imageUrl={this.state.data[name]} key={name} />
      )
    }
    return characterComponents
  }

  render() {
    const charactersComponent = this.createCharactersComponent()
    return (
      <Container>
        <Content>
          {charactersComponent}
        </Content>
      </Container>
    )
  }
}

AppRegistry.registerComponent('frda', () => frda)
