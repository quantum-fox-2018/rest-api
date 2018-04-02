const jwt = require('jsonwebtoken')

function isAuth(req,res,next){
  if(req.headers.token){
    let decoded = jwt.verify(req.headers.token, 'menguasai dunia')
    console.log(decoded);
    if(decoded.role=='Admin'){
      next()
    } else {
      res.status(403).json({
        message: 'You are not administror'
      })
    }
  } else {
    res.status(401).json({
      message: 'You are not logging in'
    })
  }
}

module.exports = {
  isAuth: isAuth
}
