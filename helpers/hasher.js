var bcrypt = require('bcrypt');
const saltRounds = 10;

function hasher(password){
  var hash = bcrypt.hashSync(password, saltRounds);
  return hash
}

module.exports = {
  hasher: hasher
}
