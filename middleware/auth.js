const jwt = require('jsonwebtoken');

module.exports = {
  adminOnly: function(req, res, next){
    let token = req.headers.token;
    // console.log(token);
    if(token){
      let decoded = jwt.verify(token, 'tokenpswd');
      if(decoded.role === "admin"){
        next()
      }else{
        res.status(401).json({
          message: "Only Admin can Access"
        })
      }

    }else{
      res.status(403).json({
        message: "U need to Login"
      })
    }
  },
  loginAuth: function( req, res, next ){
    let token = req.headers.token;

    if(token){
      next()
    }else{
      res.status(403).json({
        message: "U need to Login"
      })
    }
  }
}
