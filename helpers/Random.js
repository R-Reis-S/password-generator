export default class Random {
  constructor() {}
  static getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  static getRandomOfArray(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  static getRandomType(arrayTypes) {
    return arrayTypes[Random.getRandomOfArray(0, arrayTypes.length)]
  }
}
