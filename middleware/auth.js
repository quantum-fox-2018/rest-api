const jwt = require('jsonwebtoken');
const secretkey = process.env.SECRET

module.exports = {
  loginAuth: function (req, res, next) {
    let token = req.headers.token;

    if (token) {
      next()
    } else {
      res.status(401).json({
        message: 'Login required'
      })
    }
  },

  adminAuth: function (req, res, next) {
    let token = req.headers.token;

    if (token) {
      let decoded = jwt.verify(token, secretkey);

      if (decoded.role == 'admin') {
        next();
      } else {
        res.status(401).json({
          message: 'Unauthorized user'
        })
      }
    } else {
      res.status(401).json({
        message: 'Login required'
      })
    }
  }
}