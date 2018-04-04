const bcrypt = require('bcrypt')
const saltRounds = process.env.saltRounds

module.exports = {
  hashPassword (password) {
    return bcrypt.hashSync(password, saltRounds)
  }
}