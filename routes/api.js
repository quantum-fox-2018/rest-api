var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller')
const middleware = require('../middleware/auth')

router.post('/signup', userController.createUser)

router.post('/signin', userController.signUserIn)

router.get('/users',middleware.isUser, userController.getAllUsers)

router.get('/users/:id', middleware.isUser, userController.findUserById)

router.post('/users',middleware.isAdmin, userController.createUser)

router.delete('/users/:id',middleware.isAdmin, userController.deleteUser)

router.put('/users/:id',middleware.isUser, userController.updateUser)

module.exports = router;

