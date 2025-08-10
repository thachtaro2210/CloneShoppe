const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const dbPath = require('path').join(__dirname, '../db.json');
const adapter = new FileSync(dbPath);
const db = low(adapter);

module.exports = {
  getAll() {
    return db.get('products').value();
  },
  getById(id) {
    return db.get('products').find({ id }).value();
  },
  create(product) {
    return db.get('products').push(product).write();
  },
  update(id, updated) {
    const product = db.get('products').find({ id }).assign(updated).write();
    return product ? product.value() : null;
  },
  delete(id) {
    return db.get('products').remove({ id }).write();
  }
};