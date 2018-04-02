const {hashPassword} = require('../helpers/index')

'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  
  User.beforeCreate((user) => {
    user.password = hashPassword(user.password)
  })

  User.beforeUpdate((user) => {
    user.password = hashPassword(user.password)
  })

  User.beforeCreate((user) => {
    user.role = "user"
  })

  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
};