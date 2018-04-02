var express = require('express');
var router = express.Router()
const User = require('../controllers/users.controller')
const Auth = require('../middleware/auth')
/* GET users listing. */
router.get('/',Auth.login,Auth.admin,User.read)
router.get('/:id',Auth.login,Auth.user,User.readOne)
router.post('/',Auth.login,Auth.admin,User.createAdmin)
router.put('/:id',Auth.login,Auth.user,User.update)
router.delete('/:id',Auth.login,Auth.user,User.delete)
router.post('/signup',User.signup)
router.post('/signin',User.signin)

module.exports = router;
