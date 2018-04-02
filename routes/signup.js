const router = require('express').Router();
const {signUp} = require('../controllers/controllerUser');

router
  .post('/', signUp);

module.exports = router;