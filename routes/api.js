var express = require('express');
var router = express.Router();
const {getAllUser, createUser, getUserById, deleteUser, updateUser, signup, signin} = require('../controllers/userController')
const {authAdmin, authAdminUser} = require('../middleware/auth')
/* GET home page. */
router.get('/users', authAdmin, getAllUser) //admin only
router.post('/users', authAdmin,createUser) //admin only
router.get('/users/:id',authAdminUser, getUserById) //admin n user
router.delete('/users/:id',authAdmin, deleteUser) //admin only
router.put('/users/:id',authAdminUser, updateUser) //admin n user (sesuai idnya)
router.post('/signup', signup)
router.post('/signin', signin)

module.exports = router;
