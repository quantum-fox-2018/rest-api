'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validation:{
        isEmail: true,
        isUnique: function(value, msg) {
          let where = {email: value}
          if (this.id !== null) {
            where = {
              email: value,
              id: {$ne: this.id}
            }
          }
          User.findAll({where: where})
          .then(results => {
            if (results.length > 0) {
              msg(new Error('email already taken!'));
            }
            msg();
          })
        }
      }
    },
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate: function(user, options){
        var bcrypt = require('bcrypt');
        const saltRounds = 10;

        var salt = bcrypt.genSaltSync(saltRounds);
        console.log("======salt: ", salt);
        console.log("======password: ", user.password);
        

        let hash = bcrypt.hashSync(user.password, salt)
        user.salt = salt
        user.password = hash;
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};