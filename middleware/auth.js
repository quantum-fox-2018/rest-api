const jwt = require('jsonwebtoken');
const models = require('../models');

module.exports = {
    isAdmin: function(req, res, next){
        let token = req.headers.token
        const decoded = jwt.verify(token, 'hacktiv8');
        console.log(decoded.username);
        if(decoded.role == 'admin'){
            return next()
        }else{
            res.status(500).json({
                message: "you are not an admin!"
            })
        }
    },
    isAuthorized: function(req, res, next){
        let token = req.headers.token
        const decoded = jwt.verify(token, 'hacktiv8');
        models.User.findById({
            id: req.params.id
        })
        .then(function(dataUser){
            if(dataUser.role == 'admin' || dataUser.username == decoded.username){
                return next();
            }else{
                res.status(500).json({
                    message: "You are not authorized!"
                })
            }

        })
    }
}
