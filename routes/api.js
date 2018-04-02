const api = require('express').Router()
const apiController = require('../controllers/api.controller.js')
const {isAuth} = require('../middleware/auth.js')

api.get('/',function(req,res){
  res.send('API')
})

api.post('/signup', apiController.signUp) // for sign up

api.post('/signin', apiController.signIn) // for sign in

api.get('/users', isAuth, apiController.findAllUsers) // find all auser

api.get('/users/:id', isAuth, apiController.findOneUser) // find one user

api.post('/users', isAuth, apiController.createUser) // create user

api.delete('/users/:id', isAuth, apiController.deleteUser) // delete user

api.put('/users/:id', isAuth, apiController.editUser) // edit user

module.exports = api
