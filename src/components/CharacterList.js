import React, {
  Component
} from 'react'

import {
  Body,
  Container,
  Content,
  Header,
  StyleProvider,
  Text,
  Title
} from 'native-base'

import {
  fromJS,
  List,
  OrderedMap
} from 'immutable'

import config    from '../../config/defaults'
import getTheme  from '../../native-base-theme/components'
import platform  from '../../native-base-theme/variables/platform'
import Character from './Character'

const apiUrl = config.sfv.url

export default class CharacterList extends Component {
  constructor(props) {
    super(props)
    this.navigation = this.props.navigation
    this.state = {
      data: OrderedMap()
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
        this.setState({
          data: OrderedMap(names.sort().map(
            (name, index) => ([name, `${config.assets.url}/${name.toLowerCase()}.png`])
          ))
        })
      })
      .catch((error) => { console.log(error) })
      .done()
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header>
            <Body>
              <Title>
                <Text>SFV Frame Data</Text>
              </Title>
            </Body>
          </Header>
          <Content>
            {
              this.state.data.map((imageUrl, name) => {
                return (
                  <Character
                    key={name}
                    name={name}
                    imageUrl={imageUrl}
                    navigation={this.navigation} />
                )
              }).toList()
            }
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}
