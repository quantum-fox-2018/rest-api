const jwt = require('jsonwebtoken');

module.exports = {
    auth: function(req, res, next) {
        let token = req.headers.token 
        if (token) {
            let decoded = jwt.verify(token, 'katakunci');
            if(decoded) {
                next();
            } else {
                next("Bukan user atau admin");
            }
        } else {
            next("Tidak ada user login");
        }
    },
    authAdmin: function(req, res, next) {
        let token = req.headers.token 
        if (token) {
            let decoded = jwt.verify(token, 'katakunci')
            if(decoded) {
                if(decoded.role === "admin") {
                    next();
                } else {
                    next("Bukan admin");
                }
            }
        } else {
            next("Tidak ada user login");
        }
    }
}