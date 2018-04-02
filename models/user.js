'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "email format is not correct"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 12],
          msg: "password must be 3 - 15"
        }
      }
    },
    role: {
     type: DataTypes.STRING,
     validate: {
       isIn: {
         args: [['user', 'admin']],
         msg: "role can only be user and admin"
       }
     }
    }
  }, {
    hooks: {
      beforeSave: (user, option) => {
        let password = user.password;
        let hash = bcrypt.hashSync(password, 10);
        console.log(hash);
        
        user.password = hash;
      },  
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};