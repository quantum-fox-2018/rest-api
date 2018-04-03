const express = require('express')
const router = express.Router()
const {showAllUser, findUser, signup, deleteUser, updateUser} = require('../controller/usersController');
const {adminOnly, loginAuth} = require('../middleware/auth');

router.get('/', adminOnly, showAllUser)
      .post('/', adminOnly, signup)

router.get('/:id', loginAuth, findUser)
      .delete('/:id', adminOnly, deleteUser)
      .put('/:id', loginAuth, updateUser)

module.exports = router;
