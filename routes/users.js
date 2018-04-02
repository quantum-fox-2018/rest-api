const {signUp,signIn,viewAll,viewUser,addUser,editUser,deleteUser,updateUser}  = require('../controllers/userController')
const isAuthenticated = require('../middleware/auth.js')
const express = require('express');
const router = express.Router()

router.post('/api/signup',signUp)
router.post('/api/signin',signIn)
router.get('/api/users',isAuthenticated,viewAll)
router.get('/api/users/:id',viewUser)
router.post('/api/users',isAuthenticated,addUser)
router.put('/api/users/:id',editUser)
router.delete('/api/users:id',isAuthenticated,deleteUser)




module.exports = router;
