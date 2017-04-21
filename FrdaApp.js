import React, {
  Component
} from 'react'

import {
  StackNavigator
} from 'react-navigation'

import CharacterList      from './pages/CharacterList'
import CharacterFrameData from './pages/CharacterFrameData'

const routes = {
  CharacterList: {
    screen: CharacterList
  },

  CharacterFrameData: {
    screen: CharacterFrameData
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
