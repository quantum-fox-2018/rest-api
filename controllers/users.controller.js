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

  static createAdmin(req,res){
    let password = bcrypt.hashSync(req.body.password,salt)
    let obj = {
      username: req.body.username,
      password: password,
      role: 'admin'
    }
    userSchema.create(obj)
    .then(user=>{
      res.status(200).json({
        message:'admin created successfully',
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

  static signup(req,res){
    let password = bcrypt.hashSync(req.body.password,salt)
    let obj = {
      username:req.body.username,
      password:password,
      role:'user'
    }
    userSchema.create(obj)
    .then(user=>{
      res.status(200).json({
        message:'user created'
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static signin(req,res){
    let target = {
      username:req.body.username
    }
    userSchema.findOne(target)
    .then(user=>{
      if(user){
        let clarify = bcrypt.compareSync(req.body.password,user.password)
        if(clarify){  
          let payload = {
            id:user._id,
            name:user.username,
            role:user.role
          }
          jwt.sign(payload,'secret key',(err,token)=>{
            if(!err){
              res.status(200).json({
                message:'login success',
                token:token,
                id:user._id,
                role:user.role,
                name:user.username
              })
            } else {
              res.status(401).json({
                message:'login failed',
                err
              })
            }
          })
        } else {
          res.status(403).json({
            message:'your password is wrong'
          })
        }
      } else {
        res.status(500).json({
          message:'username is not found'
        })
      }
    })
  }
}

module.exports = User