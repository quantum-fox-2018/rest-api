var express = require('express');
var router = express.Router();

var userController = require('../controllers/user.controller.js');
var authMiddleware = require('../middlewares/auth.middleware.js');

/* GET users listing. */
router.get('/', authMiddleware.checkToken, userController.getAllUsers);
router.get('/:id', authMiddleware.checkToken, userController.getUser);
router.post('/', authMiddleware.checkToken, userController.createUser);
router.delete('/:id', authMiddleware.checkToken, userController.deleteUser);
router.put('/:id', authMiddleware.checkToken, userController.updateUser);

module.exports = router;
