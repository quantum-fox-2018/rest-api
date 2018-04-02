const router = require('express').Router();
const routeSignup = require('./signup');
const routeSignin = require('./signin');
const routeUsers = require('./user');

router.use('/signup', routeSignup);
router.use('/signin', routeSignin);
router.use('/users', routeUsers);

module.exports = router;