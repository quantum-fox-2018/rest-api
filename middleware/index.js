const jwt = require('jsonwebtoken');

function decoding(req,res, next) {
    let decoded = jwt.verify(req.headers.token, 'katakunci')
    
    if (decoded.role == 'admin') {
        next();

    } else {
        res.status(400).json({
            message: "You are not authorised !",
        }) 
    }
}


function decoAuthentication (req,res,next) {
    let id = req.params.id
    let decoded = jwt.verify(req.headers.token, 'katakunci')

    if (decoded.role == 'admin' || decoded.id == id) {
        next();

    } else {
        res.status(400).json({
            message: "You are not authorised !",
        })
    }
}


module.exports = {
    decoding,
    decoAuthentication
}