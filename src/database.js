class DatabaseAta {
  names = [];
  static _instance = null;
  constructor() {}
  static get instance() {
    if(!this._instance) {
      this._instance = new DatabaseAta();
    }
    return this._instance
  }

  clearNames() {
    this.names = [];
  }

  addName(name) {
    if(!this.names.find(_name => _name === name)) {
      this.names.push(name); 
    }
  }

  getNames() {
    return this.names;
  }
}

module.exports = DatabaseAta.instance;