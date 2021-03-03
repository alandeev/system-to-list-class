class database {
  static _instance = null;
  value = 1;
  constructor() {}
  static get instance() {
    if(!this._instance) {
      this._instance = new database();
    }
    return this._instance
  }
}