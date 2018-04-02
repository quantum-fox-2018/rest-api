const jwt = require('jsonwebtoken')

module.exports = {
    isUser: function(req, res, next){
        let token = req.headers.token
        if (token) {
            console.log(token);
            let decode = jwt.verify(token, 'kuncimas')
            if (decode) {
                next()
            } else {
                next("belum login")
            }
        } else {
            next("belum login")
        }
    },

    isAdmin: function(req, res, next){
        let token = req.headers.token
        if (token) {
            let decode = jwt.verify(token, 'kuncimas')

            if (decode.role === "admin") {
                next()
            } else {
                next("bukan admin")
            }
        } else {
            next("bukan admin")
        }

    }
}