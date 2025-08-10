const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const dbPath = require('path').join(__dirname, '../db.json');
const adapter = new FileSync(dbPath);
const db = low(adapter);

module.exports = {
  getAll() {
    return db.get('users').value();
  },
  getById(id) {
    return db.get('users').find({ id }).value();
  },
  getByUsername(username) {
    return db.get('users').find({ username }).value();
  },
  create(user) {
    return db.get('users').push(user).write();
  },
  update(id, updated) {
    const user = db.get('users').find({ id }).assign(updated).write();
    return user ? user.value() : null;
  },
  delete(id) {
    return db.get('users').remove({ id }).write();
  }
};