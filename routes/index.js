const routes = require('express').Router()

routes.get('/', (req, res) => {
  res.status(200).json({
    message: "hai, let go the /api!"
  })
})

routes.use('/api', require('./api'))
routes.use('/users', require('./users'))

module.exports = routes