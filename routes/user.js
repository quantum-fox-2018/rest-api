const router = require('express').Router();
const {signUp, getAllUsers, getUserById, deleteUser, updateUser} = require('../controllers/controllerUser');
const {loginAuth, adminAuth} = require('../middleware/auth');

router.get('/:id', loginAuth, getUserById)
      .put('/:id', loginAuth, updateUser)

router.post('/', adminAuth, signUp)
      .get('/', adminAuth, getAllUsers)
      .put('/:id', adminAuth, updateUser)
      .delete('/:id', adminAuth, deleteUser)

module.exports = router;