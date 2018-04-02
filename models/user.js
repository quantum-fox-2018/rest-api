'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      validate: {
        isUsername: function(data, callback){

          User.findOne({where: {username: data}})
              .then(user=>{
                if(user){
                  callback("username sudah ada")
                }else{
                  callback(user)
                }
              })
        }
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, options) => {

      if(user.username == "" || user.name == "" || user.password == ""){
        throw new Error('Tidak boleh ada yang kosong')
      }
     }
   }});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
