const routes = require('express').Router()

const apiController = require('../controllers/api')
const auth = require('../middleware/auth')

routes.get('/', (req, res) => {
  res.status(200).json({
    message: "go to signup or signin"
  })
})

routes.post('/signup', apiController.signupUser)
routes.post('/signin', apiController.signinUser)

routes.use('/users', require('./users'))

module.exports = routes