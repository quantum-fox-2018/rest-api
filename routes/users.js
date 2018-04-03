const router = require('express').Router();
const usercontroller = require('../controllers/userscontroller')
const auth = require('../middlewares/auth')

router.get('/users',auth.check,usercontroller.getall)
router.get('/users/:id',auth.checktoken,usercontroller.getbyid)
router.post('/signup',usercontroller.signup)
router.post('/signin',usercontroller.signin)
router.post('/users',auth.check,usercontroller.createuser)
router.delete('/users/:id',auth.check,usercontroller.deleteuser)
router.put('/users/:id',auth.checktoken,usercontroller.updateuser)

module.exports = router
