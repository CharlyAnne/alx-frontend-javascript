export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('Invalid input');
    }
    if (
      this.constructor !== Building &&
      this.evacuationWarningMesagge ===
        Building.prototype.evacuationWarningMessage
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage'
      );
    }
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    // eslint-disable-line
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }
}
