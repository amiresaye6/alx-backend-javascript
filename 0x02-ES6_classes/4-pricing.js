export default class Pricing {
  constructor(amount, currency) {
    if (!Number.isInteger(amount)) throw TypeError('amoutn must be intger');
    // if (typeof (currency) !== 'Currency') throw TypeError('currency must be of tybe Currency');
    this._amount = amount;
    super._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    if (!Number.isInteger(value)) throw TypeError('amoutn must be intger');
    this._amount = value;
  }

  set currency(value) {
    // if (typeof (Currency) !== 'Currency') throw TypeError('amoutn must be intger');
    this._amount = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (!Number.isInteger(amount)) throw TypeError('amount must be intger');
    if (!Number.isInteger(conversionRate)) throw TypeError('currencty_code must be intger');
    return amount * conversionRate;
  }
}
