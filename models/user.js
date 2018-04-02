'use strict';

var bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    RoleId: {
      type :DataTypes.INTEGER,
      set(val){
        if(val.toLowerCase() === 'admin'){
          this.setDataValue('RoleId', 1);
        }else if(val.toLowerCase() === 'user'){
          this.setDataValue('RoleId', 2);
        } else{
          throw new Error('please insert a correct role')
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      validate: {
        isEmail: {
          args: true, 
          msg: 'email format is invalid'
        }
      }
    },
    phone:{
      type : DataTypes.STRING,
      validate:{
        isPhone() {
          let phoneCheck = /\D/g.test(Number(this.phone));
          if (phoneCheck) {
            throw new Error('Phone number is not valid')
          }
        }
      }
    }    
  }, {
    hooks:{
      beforeCreate:(user)=>{
        user.password = bcrypt.hashSync(user.password, saltRounds);
      },
      beforeUpdate:(user)=>{   
        user.password = bcrypt.hashSync(user.password, saltRounds);
      }
    }    
  });
  User.associate = function(models) {
    User.belongsTo(models.Role, {foreignKey: 'RoleId'});
  };
  return User;
};