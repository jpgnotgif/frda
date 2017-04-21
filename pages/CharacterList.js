import React, {
  Component
} from 'react'

import {
  Container,
  Content,
  StyleProvider
} from 'native-base'

const config = require('../config/defaults')
const apiUrl = config.sfv.url

import getTheme   from '../native-base-theme/components'
import platform   from '../native-base-theme/variables/platform'
import Character  from './Character'

export default class CharacterList extends Component {
  constructor(props) {
    super(props)
    this.navigation = this.props.navigation
    this.routeMetadata = this.props.routeMetadata
    this.state = {
      data: {}
    }
  }

  load() {
    return fetch(`${apiUrl}/characters`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.characters
    })
    .catch((error) => {
      console.error(error)
    })
  }

  componentDidMount() {
    this.load()
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
        <Character
          key={name}
          name={name}
          imageUrl={this.state.data[name]}
          navigation={this.navigation}
        />
      )
    }
    return characterComponents
  }

  render() {
    const charactersComponent = this.createCharactersComponent()
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Content>
            {charactersComponent}
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}

module.exports = CharacterList
