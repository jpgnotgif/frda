const config = require('../config/defaults');
const apiUrl = config.sfv.url;

class CharacterList {
  constructor() {}

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
}

module.exports = CharacterList;
