const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { User } = require('../models')
const tokenPassword = 'onepiece'

module.exports = {
  signupUser (req, res) {
    let newUser = {
      name: req.body.name,
      password: req.body.password,
      role: req.body.role
    }
    User.create(newUser)
    .then(user => {
      res.status(200).json({
        message: "success create new user",
        data: user
      })
    })
    .catch(err => res.status(500).json( {message:err} ))
  },

  signinUser (req, res) {
    let nameLogin = req.body.name
    let passwordLogin = req.body.password
    User.findOne({
      where: {
        name: nameLogin
      }
    })
    .then(user => {
      if(!user) {
        res.status(404).json({message: "name is wrong"})
      } else {
        let compare = bcrypt.compareSync(passwordLogin, user.password)
        if(!compare) {
          res.status(404).json({message: "password is wrong"})
        } else {
          let token = jwt.sign({
            role: user.role
          }, tokenPassword)

          res.status(200).json({
            message: "success login",
            token: token
          })
        }
      }
    })
    .catch(err => res.status(500).json( {message:err} ))
  }
}