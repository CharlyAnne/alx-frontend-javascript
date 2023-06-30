/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(name) {
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
