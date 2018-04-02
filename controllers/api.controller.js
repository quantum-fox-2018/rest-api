'use strict'
const {User} = require('../models')
const jwt = require('jsonwebtoken')
const {hasher} = require('../helpers/hasher')
var bcrypt = require('bcrypt')

module.exports = {
  signUp: (req,res)=>{
    const {firstName,lastName,email,username,password,role} = req.body
    User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password,
      role: role
    }).then(()=>{
      res.status(201).json({
        message: `User created`,
        data: req.body
      })
    }).catch(err=>{
      res.status(404).json({
        message: `Create user failed`
      })
    })
  },
  signIn: (req,res)=>{
    User.findOne({
      where: {
        username: req.body.username
      },
      raw: true
    }).then(user=>{
      if(user){
        let compare = bcrypt.compareSync(req.body.password, user.password)
        if(compare==true){
          let token = jwt.sign({id: user.id, role: user.role}, 'menguasai dunia');
          res.status(200).json({
            message: 'user found!',
            token: token
          })
        } else {
          res.status(400).json({
            message: 'wrong password'
          })
        }
      } else {
        res.status(400).json({
          message: 'user not found'
        })
      }
    }).catch(err=>{
      res.status(404).json({
        message: 'error'
      })
    })
  },
  findAllUsers: (req,res)=>{
    User.findAll({
      raw: true
    }).then(users=>{
      res.status(200).json({
        data: users
      })
    }).catch(err=>{
      res.status(404).json({
        err: err.message
      })
    })
  },
  findOneUser: (req,res)=>{
    User.findOne({
      where: {
        id: req.params.id
      }
    }).then(user=>{
      if(user){
        res.status(200).json({
          data: user
        })
      } else {
        res.status(400).json({
          message: 'User not found'
        })
      }
    }).catch(err=>{
      res.status(404).json({
        err: err.message
      })
    })
  },
  createUser: (req,res)=>{
    const {firstName,lastName,email,username,password,role} = req.body
    User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password,
      role: role
    }).then(()=>{
      res.status(200).json({
        message: 'User created',
        data: req.body
      })
    }).catch(err=>{
      res.status(400).json({
        message: err.message
      })
    })
  },
  deleteUser: (req,res)=>{
    User.destroy({
      where: {
        id: req.params.id
      }
    }).then(()=>{
      res.status(200).json({
        message: `data id: ${req.params.id} deleted`
      })
    }).catch(err=>{
      res.status(400).json({
        message: err.message
      })
    })
  },
  editUser: (req,res)=>{
    const {firstName,lastName,email,username,password,role} = req.body
    User.update({
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password,
      role: role
    },{
      where: {
        id: req.params.id
      }
    }).then(()=>{
      res.status(200).json({
        message: `data id: ${req.params.id} updated`
      })
    }).catch(err=>{
      res.status(400).json({
        message: err.message
      })
    })
  }
}
