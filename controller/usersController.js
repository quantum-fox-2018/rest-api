const db = require('../models/');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

// require('dotenv').config()
const pwdtoken = process.env.pwdtoken
// console.log(process.env.pwdtoken);

module.exports = {
  signup: function( req, res) {
    let plainPassword = req.body.password;

    bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
      db.User.create({
        username: req.body.username,
        password: hash,
        role: req.body.role
      })
        .then(userData =>{
          // console.log(userData);
          res.status(201).json({
            message:"Users Succesfully create",
            user: userData
          })
        })
        .catch(err =>{
          res.status(500).json({
            message: err.message
          })
        })
    })

  },
  signin: function( req, res ){
    let username = req.body.username;
    let password = req.body.password;

    db.User.findOne({where:{username:username}})
      .then(user =>{
        console.log(user);
        // let token = jwt.sign({id: user.id, role: user.role}, 'tokenpswd')
        let token = jwt.sign({id: user.id, role: user.role}, pwdtoken)
        bcrypt.compare(password, user.password, function(err, result) {
          if(err){
            // console.log('Password salah');
            res.status(500).json({
              message: "Password Salah"
            })
          }else{
            res.status(200).json({
              message: "User Login Succesfully",
              user:user,
              token
            })
          }
        })
      })
      .catch(err =>{
        res.status(500).json({
          message: err.message
        })
      })
  },
  showAllUser: function( req, res ) {
    //admin only
    db.User.findAll()
      .then(user =>{
        res.status(200).json({
          message:"All User Data",
          user
        })
      })
      .catch(err =>{
        console.log(err);
      })
  },
  findUser: function( req, res ) {
    let userId = req.params.id;
    // console.log('--------' ,userId);
    db.User.findOne({where:{id:userId}})
      .then(userData => {
        if(userData){
          res.status(200).json({
            message:"User found!",
            user:userData
          })
        }else{
          res.status(404).json({
            message:"User not found!",
            user:userData
          })
        }

      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },
  deleteUser: function( req, res ) {
    let userId = req.params.id;

    db.User.destroy({where:{id:userId}})
      .then(result => {
        if(result === 1){
          res.status(200).json({
            message:`User Succesfully deleted`,
            userId
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },
  updateUser: function( req, res ){
    // console.log(req.params.id);
    // console.log(req.body);

    let userId = req.params.id;
    let newPassword = req.body.password;
    console.log(userId);
    console.log(req.body);
    db.User.findOne({where:{id:userId}})
      .then(userData => {
        if (userData) {
          //datanya ada
          bcrypt.hash(newPassword, saltRounds, function(err, hash) {
            let updateData = {
              id: userId,
              username: req.body.username,
              password: hash,
              role: req.body.role
            }
            console.log('-------', updateData);
            if(err){
              res.status(500).json({
                message: err.message
              })
            }else{
              // console.log('old password',newPassword);
              // console.log('new password', hash);
              db.User.update(updateData,
                  {
                    where:{id:userId}
                  }
                )
                .then(userChange => {
                  res.status(200).json({
                    message:"User Succesfully updated!",
                    beforeUpdate:userData,
                    afterChange: updateData
                  })
                })
                .catch(err =>{
                  res.status(500).json({
                    message: err.message
                  })
                })
            }

          })
        }else{
          //datanya g ketemu
          res.status(404).json({
            message:"User not found!",
            user:userData
          })
        }
        // console.log(userData);
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })


  }
}














//
