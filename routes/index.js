var express = require('express');
var router = express.Router();

var authController = require('../controllers/auth.controller.js');
var authMiddleware = require('../middlewares/auth.middleware.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', authController.signup);
router.post('/signin', authMiddleware.getToken, authController.signin);

module.exports = router;
