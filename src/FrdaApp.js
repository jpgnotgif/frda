import React, {
  Component
} from 'react'

import {
  StackNavigator
} from 'react-navigation'

import CharacterList from './components/CharacterList'
import FrameData from './components/FrameData'

const routes = {
  CharacterList: {
    screen: CharacterList
  },

  FrameData: {
    screen: FrameData
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
