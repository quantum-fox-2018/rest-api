const jwt = require('jsonwebtoken')

function loginChecker(req, res, next){

  let token = req.headers.token
  let secretKey = process.env.keycode
  jwt.verify(token, secretKey, function(err, decoded) {
    if(err) {
      res.status(403).json({
        message: "You are not allowed to access this page"
      })
    }else{
      next()
    }
  })

}

module.exports = loginChecker;
