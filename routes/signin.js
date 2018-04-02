const router = require('express').Router();
const {signIn} = require('../controllers/controllerUser');

router
  .post('/', signIn);

module.exports = router;