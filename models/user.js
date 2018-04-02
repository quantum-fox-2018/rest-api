'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate: {
        isUnique: function(value, msg) {
          let where = { username: value }
          if (this.id !== null) {
            where = {
              username: value,
              id: {$ne: this.id}
            }
          }
          User.findAll({where: where})
          .then(result => {
            if (result.length > 0) {
              msg(new Error('Username already used'))
            }
            msg();
          })
        }
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};