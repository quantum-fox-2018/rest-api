var express = require('express');
var router = express.Router();
const user = require('../controller/user_controller.js');
const middleware = require('../middleware/auth');


//Sign up with new user info
router.post('/signup', user.signUp);

//Sign in while get an access token based on credentials
router.post('/signin', user.signIn);

//get all the users info (admin only)
router.get('/users', middleware.isAdmin, user.getAllUsers);

//get a single user info (admin and authenticated user)
router.get('/users/:id', user.getById);

//create a user(admin only)
router.post('/users',middleware.isAdmin, user.createUser);

//delete a user(admin only)
router.delete('/users/:id', middleware.isAdmin, user.deleteUser);

//update a user with new info (admin and authenticated user)
router.put('/users/:id',middleware.isAuthorized, user.updateUser);

module.exports = router;
