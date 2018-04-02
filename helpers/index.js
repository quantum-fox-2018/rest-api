const bcrypt = require('bcrypt')
const saltRounds = 7

module.exports = {
  hashPassword (password) {
    return bcrypt.hashSync(password, saltRounds)
  }
}