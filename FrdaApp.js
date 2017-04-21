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
    name: 'SFV Characters',
    screen: CharacterList
  },

  CharacterFrameData: {
    name: 'Frame Data',
    screen: CharacterFrameData,
  }
}

const MainScreen = ({ navigation }) => (
  <CharacterList
    navigation={navigation}
    routeMetadata={routes}
  />
)

const AppNavigator = StackNavigator({
  ...routes,
  Index: {
    screen: MainScreen,
  },
}, {
  initialRouteName: 'Index',
  headerMode: 'none',
})

export default () => <AppNavigator />
