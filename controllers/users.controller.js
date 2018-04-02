const userSchema = require ('../models/users.model')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')

class User {
  static read(req,res){
    userSchema.find()
    .then(users=>{
      res.status(200).json({
        message:'this is list of users:',
        users
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static readOne(req,res){
    let target = {
      _id:req.params.id
    }
    userSchema.find(target)
    .then(user=>{
      res.status(200).json({
        message:'this is user that you search',
        user
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static create(req,res){
    let password = bcrypt.hashSync(req.body.password,salt)
    let obj = {
      username: req.body.username,
      password: password
    }
    userSchema.create(obj)
    .then(user=>{
      res.status(200).json({
        message:'user created successfully',
        user
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static update(req,res){
    // console.log(req.body)
    userSchema.findOne({_id:req.params.id})
    .then(data=>{
      data.username = req.body.username || data.username
      data.password = bcrypt.hashSync(req.body.password,salt) || data.password
      data.save()
      .then(userUpdate=>{
        res.status(200).json({
          message:'user updated',
          userUpdate
        })
      })
      .catch(err=>{
        res.status(500).json({
          message:'update failed'
        })
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'user that will be updated is not found',
        err
      })
    })
  }

  static delete(req,res){
    let target = {
      _id: req.params.id
    }
    userSchema.findByIdAndRemove(target)
    .then(user=>{
      res.status(200).json({
        message:'user deleted',
        user
      })
    })
    .catch(err=>{
      message:'something went wrong',
      err
    })
  }

  static signin(req,res){

  }
}

module.exports = User