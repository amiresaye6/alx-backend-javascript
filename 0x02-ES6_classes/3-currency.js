export default class Currency {
  constructor(code, name) {
    if (typeof (code) !== 'string') throw TypeError('code must be a string');
    if (typeof (name) !== 'string') throw TypeError('name must be a string');
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(new_val) {
    if (typeof (new_val) !== 'string') throw TypeError('code must be a string');
    this._name = new_val;
  }

  set code(new_val) {
    if (typeof (new_val) !== 'string') throw TypeError('code must be a string');
    this._code = new_val;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
