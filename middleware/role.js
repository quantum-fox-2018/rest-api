const jwt = require('jsonwebtoken')

function roleChecker(req, res, next){

  let token = req.headers.token

  jwt.verify(token, "secret", function(err, decoded) {
    if(err) {
      res.status(403).json({
        message: "You are not allowed to access this page"
      })
    }else{
      if(decoded.role == "admin"){
        next();
      }else{
        res.status(401).json({
          message: "You are not allowed to access this page"
        })
      }

    }
  })

}

module.exports = roleChecker;
