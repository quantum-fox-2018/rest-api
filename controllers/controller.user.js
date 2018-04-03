const Model = require('../models/index.js')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')

module.exports = {

  signup: function(req, res){

    let newUser = {
      name: req.body.name,
      username: req.body.username,
      password: null,
      salt: null,
      role: req.body.role,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    let plain_password = req.body.password;
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(plain_password, salt, function(err, hash) {
          newUser.password = hash;
          newUser.salt = salt;
          Model.User.create(newUser)
               .then((user)=>{
                 res.status(201).json({
                   message: "Success sign up",
                   user: user
                 })
               })
               .catch(err=>{
                 console.log(err);
                 res.status(400).json({
                   message: err.message,
                 })
               })
        });
    });
  },

  signin: function(req,res){

    let username = req.body.username;
    let password = req.body.password;

    Model.User.findOne({where: {username: username}})
         .then(user=>{
           let myPlaintextPassword = password;
           let hash = user.password;
           let secretKey = process.env.keycode;
           bcrypt.compare(myPlaintextPassword, hash, function(err) {
             let token = jwt.sign({ role: user.role}, secretKey);
             res.status(200).json({
               message: "login success",
               token: token,
               user: user
             })
           })
         })
         .catch(err=>{
           res.status(404).json({
             message: "login failed"
           })
         })
  },

  getOneUser: function(req, res){

    let getId = req.params.id
    Model.User.findOne({where: {id: getId}})
         .then(user=>{

           if(user == null){
             res.status(404).json({
               message: "Not found user"
             })
           }else{
             res.status(200).json({
               message: "show data",
               user: user
             })
           }
         })
  },

  getAllUser: function(req, res){
    Model.User.findAll({where: {role:"user"}})
         .then(users=>{

           if(users.length>0){
             res.status(200).json({
               message: "Success show data",
               users: users
             })
           }else{
             res.status(404).json({
               message: "not found",
             })
           }

         })
  },

  update: function(req, res){

    let getId = req.params.id

    let newData = {
      name: req.body.name,
      username: req.body.username,
      password: null,
      salt: null,
    }

    let plain_password = req.body.password;
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(plain_password, salt, function(err, hash) {
          newUser.password = hash;
          newUser.salt = salt;
          Model.User.findOne({where: {id: getId}})
               .then(user=>{
                 user.updateAttributes(newData)
                     .then((updatedUser)=>{
                       res.status(200).json({
                         message: "success updated user",
                         user: updatedUser
                       })
                     })
               })
        });
    });



  },

  delete: function(req, res){

    let getId = req.params.id

    Model.User.destroy({where: {id: getId}})
         .then((user)=>{
           if(user == 0){
             res.status(404).json({
               message: "not found id"
             })
           }else{
             res.status(200).json({
               message: "success delete id"
             })
           }
         })
  },

  createUser: function(req, res){

    let newUser = {
      name: req.body.name,
      username: req.body.username,
      password: null,
      salt: null,
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date()
    }

    let plain_password = req.body.password;
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(plain_password, salt, function(err, hash) {
          newUser.password = hash;
          newUser.salt = salt;
          Model.User.create(newUser)
               .then((user)=>{
                 res.status(201).json({
                   message: "Success add user",
                   user: user
                 })
               })
               .catch(err=>{
                 console.log(err);
                 res.status(400).json({
                   message: err.message,
                 })
               })
        });
    });
  }

};
