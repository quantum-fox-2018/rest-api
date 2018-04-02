'use strict';
const {hasher} = require('../helpers/hasher')

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  });

  User.beforeCreate((user) => {
    user.password = hasher(user.password)
  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
