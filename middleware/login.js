const jwt = require('jsonwebtoken')

function loginChecker(req, res, next){

  let token = req.headers.token

  jwt.verify(token, "secret", function(err, decoded) {
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
