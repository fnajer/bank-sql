
class dbParams {

  constructor(user, password) {
    this.params = {
      host: 'localhost',
      database: 'bank_db',
      user: user,
      password: password
    };
  }

  get() {
    return this.params;
  }
}

module.exports = dbParams;