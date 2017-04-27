import React, {
  Component
} from 'react'

import {
  StackNavigator
} from 'react-navigation'

import CharacterList from './components/CharacterList'
import AttackList from './components/AttackList'

const routes = {
  CharacterList: {
    screen: CharacterList
  },

  AttackList: {
    screen: AttackList
  }
}

const MainScreen = ({ navigation }) => (
  <CharacterList
    navigation={navigation}
  />
)

const AppNavigator = StackNavigator({
  ...routes,
  Home: {
    screen: MainScreen,
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
})

export default () => <AppNavigator />
