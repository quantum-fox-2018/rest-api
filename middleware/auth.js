const jwt = require('jsonwebtoken')

class Auth {
  static login (req,res,next) {
    // console.log(req.headers.token)
    jwt.verify(req.headers.token, 'secret key', (err, decoded) => {
      if(err){
        res.status(403).json({
          message: 'login dulu mas'
        })
      }else{
        req.decoded = decoded
        next()
      }
    })
  }
  
  static admin (req,res,next) {
    if(req.decoded && req.decoded.role === 'admin') {
      return next()
    } else {
      res.status(403).json({
        message : 'you must an admin to access this page'
      })
    }
  }

  static user (req,res,next) {
    if(req.decoded.id == req.params.id || req.decoded.role == 'admin') {
      return next()
    }else{
      res.status(403).json({
        message: 'you are not authorized to this user'
      })
    }
  }
}

module.exports = Auth