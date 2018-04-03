'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate:{
        isAvailable: function(value, msg){
          // console.log(value);
          console.log(this);
          let where = {username:value}
          if(this.id !== null){
            where = {username:value, id: {$ne: this.id}};
          }
          User.findAll({where})
              .then(results => {
                if(results.length != 0){
                  msg(new Error('Username has been used'))
                }else{
                  msg()
                }
              })
              .catch(err => {
                msg(new Error(err.message))
              })
        },
        notEmpty: function(value, msg) {
          if(value !== ''){
            msg()
          }else{
            msg('username must not empty')
          }
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
