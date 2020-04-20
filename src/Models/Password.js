import Random from '../../helpers/Random.js'

export default class Password {
  constructor(charsets) {
    this.charsets = charsets
  }
  generatePassword(length, types) {
    let password = ''

    for (let i = 0; i < length; i++) {
      let type = this.charsets[Random.getRandomType(types)]
      let char = String.fromCharCode(Random.getRandomValue(type.min, type.max))

      password += char
    }
    return password
  }
}
