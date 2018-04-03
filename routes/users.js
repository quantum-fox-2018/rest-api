const router = require('express').Router();
const {auth, authAdmin} = require('../middleware/auth');
const {signup, signin, getAllUsers, getOneUser, createUser, deleteUser, updateUser} = require('../controllers/users.controller')

router
    .post('/signup', signup) // sign up with new user info
    .post('/signin', signin) // sign in while get an access oken based on credentials
    .get('/users', authAdmin, getAllUsers) //get all users info (admin only)
    .get('/users/:id', auth, getOneUser) // get a single user info (admin and authenticated user)
    .post('/users', authAdmin, createUser) // create a user (admin only)
    .delete('/users/:id', authAdmin, deleteUser) // delete a user(admin only)
    .put('/users/:id', auth, updateUser) //update a user with new info (admin dan authenticated user)

module.exports = router