const jwt = require('jsonwebtoken')

module.exports = {
  check : (req,res,next) => {
    if(req.headers.token){
      try {
        var decoded = jwt.verify(req.headers.token, process.env.SECRET);
        if (decoded.status==='admin') {
          next()
        }else{
          res.status(401).json({
            message: 'maaf anda bukan admin'
          })
        }
      }catch (err) {
        res.status(401).json({
          message: 'authentication failed'
        })
      }
    }else{
      res.status(401).json({
        message: 'please insert your token'
      })
    }
  },
  checktoken : (req,res,next) => {
    if(req.headers.token){
      try {
        var decoded = jwt.verify(req.headers.token, process.env.SECRET);
        if (decoded) {
          next()
        }
      }catch (err) {
        res.status(401).json({
          message: 'authentication failed'
        })
      }
    }else{
      res.status(401).json({
        message: 'please insert your token'
      })
    }
  }
};
