import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  item: {
    fontSize: 12,
    padding: 20
  },

  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },

  footerCol: {
    alignItems: 'center',
    backgroundColor: '#384850',
  },

  footerTextHeader: {
    fontWeight: 'bold'
  },

  footerText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 20
  }
})

module.exports = styles
