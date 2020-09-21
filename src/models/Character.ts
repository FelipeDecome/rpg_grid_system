export default class Character {
  constructor(private name: String, private token: {}) {}

  getName() {
    return this.name;
  }

  getToken() {
    return { ...this.token };
  }
}
