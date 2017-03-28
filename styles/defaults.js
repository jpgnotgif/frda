import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },

  item: {
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderColor: '#CCC',
    borderRadius: 5,
    borderWidth: 1,
    height: 100,
    justifyContent: 'center',
    margin: 10,
    padding: 5,
    width: 100
  },

  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
})

module.exports = styles
