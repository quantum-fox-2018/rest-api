const jwt = require('jsonwebtoken');
const pwdtoken = process.env.pwdtoken;

module.exports = {
  adminOnly: function(req, res, next){
    let token = req.headers.token;
    // console.log(token);
    if(token){
      //let decoded = jwt.verify(token, 'tokenpswd');
      let decoded = jwt.verify(token, pwdtoken);
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
