const jwt = require('jsonwebtoken');

class Auth {
    static cekAdminRole(req, res, next) {
        let token = req.headers.token
        var decoded = jwt.verify(token, 'jadi programer');
        
        if(decoded.role == 'admin'){
            next()
        } else {
            res.status(500).json({
                message: 'Anda bukan admin'
            })
        }
    }
}

module.exports = Auth;