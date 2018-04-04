const jwt = require('jsonwebtoken')

const tokenPassword = process.env.tokenPassword

module.exports = {
  authAdmin (req, res, next) {
    var decoded = jwt.verify(req.headers.token, tokenPassword)
    if(!decoded) {
      res.status(404).json({
        message: "role is not defined"
      })
    } else if(decoded.role == "user") {
      res.status(403).json({
        message: "role can't not access"
      })
    } else if(decoded.role == "admin") {
      next()
    }
  },

  authUser (req, res, next) {
    var decoded = jwt.verify(req.headers.token, tokenPassword)
    if(!decoded) {
      res.status(404).json({
        message: "role is not defined"
      })
    } else if(decoded.role == "admin" || decoded.role == "user") {
      next()
    }
  }
}