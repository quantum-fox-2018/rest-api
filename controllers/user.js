const { User } = require('../models')

module.exports = {
  readAllUsers (req, res) {
    User.findAll()
    .then(users => {
      res.status(200).json({
        message: "success get data users",
        data: users
      })
    })
    .catch(err => res.status(500).json( {message: err} ))
  },

  readUser (req, res) {
    let id = req.params.id
    User.findById(id)
    .then(user => {
      if(user) {
        res.status(200).json({
          message: "success get data by id",
          data: user
        })
      } else {
        res.status(404).json( {message: "user not found"} )
      }
    })
    .catch(err => res.status(500).json( {message:err} ))
  },

  createUser (req, res) {
    let newUser = {
      name: req.body.name,
      password: req.body.password,
      role: req.body.role
    }

    User.create(newUser)
    .then(user => {
      res.status(200).json({
        message: "success create user",
        data: user
      })
    })
    .catch(err => res.status(500).json( {message:err} ))
  },

  deleteUser (req, res) {
    let id = req.params.id
    User.findById(id)
    .then(user => {
      if(user) {
        user.destroy()
        .then(info => {
          res.status(200).json({
            message: "success delete user",
            data: info
          })
        })
        .catch(err => res.status(500).json( {message:err} ))
      } else {
        res.status(404).json( {message: "user not found"} )
      }
    })
    .catch(err => res.status(500).json( {message:err} ))
  },

  updateUser (req, res) {
    let id = req.params.id
    let updateUser = {
      name: req.body.name,
      password: req.body.password,
      role: req.body.role
    }
    User.findById(id)
    .then(user => {
      if(user) {
        user.update(updateUser)
        .then(newUser => {
          res.status(200).json({
            message: "success update user",
            data: newUser
          })
        })
      } else {
        res.status(404).json( {message: "user not found"} )
      }
    })
    .catch(err => res.status(500).json( {message: err} ))
  }
}