const express = require('express')
const router = express.Router()
const {signup, signin} = require('../controller/usersController');



router.post('/signup', signup)
      .get('/signup', function(req, res) {
        res.send('Halaman Signup');
      })
  // res.send('halaman Signup');
//})

router.get('/signin', function(req, res){
        res.send('halaman signin');
      })
      .post('/signin', signin)



module.exports = router;
