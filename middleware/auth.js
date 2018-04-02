const jwt = require('jsonwebtoken')

function isAuthenticated(req, res, next) {
  let token = req.headers.token
  var decoded = jwt.verify(token,'rahasia dong')
    console.log(decoded.role);
  if(decoded.role==='admin'){
    next()
  }
  else{
    res.status(500).json({
      message: 'role not admin'
    })
  }
  // do any checks you want to in here

  // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
  // you can do this however you want with whatever variables you set up
  // if (req.decoded.authenticated)
  //     return next();

  // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
  // res.redirect('/');
}

module.exports = isAuthenticated
