var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller.user.js')
const roleChecker = require('../middleware/role.js')
const loginChecker = require('../middleware/login.js')

/* GET users listing. */
router.post('/signup', controller.signup) // untuk sign up
      .post('/signin', controller.signin) // untuk sign in
      .get('/users', roleChecker, controller.getAllUser) // show all user (admin only)
      .post('/users', roleChecker, controller.createUser) // create User (admin only)
      .get('/users/:id', loginChecker, controller.getOneUser) // show one user (admin and authorized user)
      .put('/users/:id', loginChecker, controller.update) // update one user (admin and authorized user)
      .delete('/users/:id', roleChecker, controller.delete) // delete one user  (admin only)

module.exports = router;
