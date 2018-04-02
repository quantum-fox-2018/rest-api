const jwt = require('jsonwebtoken');

module.exports = {
  authAdmin: (req, res, next) => {
    let token = req.headers.token
    console.log("auth token", token)
    try {
      let decoded = jwt.verify(token, process.env.SECRET);
      console.log("decode", decoded)
      if(decoded.role === 'admin'){
        next()
      }else{
        res.status(403).json({
          message: "admin only, you don't have access!!"
        })
      }
    } catch(err) {
      // err
      res.status(401).json({
        message: "you need token to access",
        err
      })
    }
  },
  authAdminUser: (req, res, next) => {
    let token = req.headers.token
    let id = +req.params.id
    try {
      let decoded = jwt.verify(token, process.env.SECRET)
      console.log("id decoded",decoded.id, "params", id)
      console.log(typeof id)
      if(decoded.role === "user" && decoded.id === id){
        next()
      }else if(decoded.role === 'admin'){
        next()
      }else{
        res.status(403).json({
          message: "FORBIDDEN!!! You don't have access"
        })
      }
    }catch (error) {
      res.status(401).json({
        message: "You need token to access, login first!",
        error
      })
    }
  }
}