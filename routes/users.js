const routes = require('express').Router()

const userController = require('../controllers/user')
const auth = require('../middleware/auth')

routes.get('/', auth.authAdmin, userController.readAllUsers)
routes.get('/:id', auth.authUser, userController.readUser)
routes.post('/', auth.authAdmin, userController.createUser)
routes.delete('/:id', auth.authAdmin, userController.deleteUser)
routes.put('/:id', auth.authUser, userController.updateUser)

module.exports = routes