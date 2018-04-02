var express = require('express');
var router = express.Router();
const User = require('../controllers/users.controller')
/* GET users listing. */
router.get('/', User.read)
router.get('/:id', User.readOne)
router.post('/', User.create)
router.put('/:id', User.update)
router.delete('/:id', User.delete)

module.exports = router;
