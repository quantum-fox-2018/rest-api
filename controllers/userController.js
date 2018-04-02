const models = require('../models')
const User = models.User
const saltRounds = 10;
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require('jsonwebtoken');

module.exports = {
  getAllUser: (req,res) => {
    User.findAll().then(dataUser => {
        res.status(200).json({
          message: "success get all data users",
          dataUser
        })
    }).catch(error=>{
      res.status(404).json({
        message: "user list not found!",
        error
      })
    })
  },
  createUser: (req, res) => {
    const {name, email} = req.body
    var hash = bcrypt.hashSync(req.body.password, salt);
    let role = 'user'
    User.create({name, email, password: hash, role}).then(newUser => {
      res.status(201).json({
        message: "success add new user",
        newUser
      })
    }).catch(error => {
      res.status(400).json({
        message: "failed create new user",
        error
      })
    })
  },
  getUserById: (req, res) => {
    let id = req.params.id
    User.findById(id).then(user => {
      res.status(200).json({
        message: "user is found",
        user
      })
    }).catch(error => {
      res.status(404).json({
        message: "user is not found!",
      })
    })
  },
  deleteUser: (req, res) => {
    let id = req.params.id
    User.findById(id).then(dataUser => {
      if(dataUser){
        User.destroy({where:{id:id}}).then(user => {
          res.status(200).json({
            message: "success removed user",
            user
          })
        }).catch(error => {
            res.status(400).json({
            message: "failed remove user!",
          })
        })
      }else{
        res.status(404).json({
          message: "user not found!"
        })
      }
    })
    
  },
  updateUser: (req, res) => {
    let id= req.params.id
    // let input = {
    //   name: req.body.name,
    //   email: req.body.email
    // }
    User.findById(id).then(dataUser =>{
      if(dataUser){
        User.update(req.body,{where:{id:id}}).then(updated => {
          res.status(200).json({
            message: "success update user",
            updated
          })
        }).catch(error => {
          res.status(400).json({
            message: "failed update user!",
          })
        })
      }else{
        res.status(404).json({
          message: "user not found!"
        })
      }
    })
    
  },
  signup: (req, res) => {
    var hash = bcrypt.hashSync(req.body.password, salt);
    let input = {
      name: req.body.name,
      email: req.body.email,
      password: hash,
      role: 'user'
    }
    User.create(input).then(newuser => {
      res.status(201).json({
        message: "signup success",
        newuser
      })
    }).catch(error => {
      res.status(400).json({
        message: "signup failed!",
        error
      })
    })
  },
  signin: (req, res) => {
    User.findOne({where: {email:req.body.email}}).then(dataUser => {
      if(dataUser) {
        console.log("data user signin==",dataUser)
        let checkPass = bcrypt.compareSync(req.body.password, dataUser.password); // true
        if(checkPass) {
          let token = jwt.sign({id:dataUser.id, email: dataUser.id, role: dataUser.role},process.env.SECRET);
          console.log("token==", token)
          res.status(200).json({
            message: "signin success",
            token
          })
        }else{
          res.status(400).json({
            message: "wrong email/password"
          })
        }
      }else{
          res.status(400).json({
          message: "user not found"
        })
      }
    })
      
    
  }
}