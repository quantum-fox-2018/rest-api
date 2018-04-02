var db = require('../models/index.js');
var jwt = require('jsonwebtoken');

var bcrypt = require('bcrypt');

var roleHelper = require('../helpers/role.helper.js')


module.exports = {
    getToken : function(req, res, next){
        
        db.User.findOne({
            where: {username: req.body.username}
          }).then(user => {
            if(bcrypt.compareSync(req.body.password, user.password)){
                roleHelper.assignRoleName(user, (role)=>{
                user.role = role;    
                let token = jwt.sign({ id: user.id, role:user.role }, 'secretpunyasaya');
                req.headers.token = token;
                return next();
                });
            };
          })
    },

    checkToken : function(req, res, next){
        if(req.headers.token){
            try {
                var decoded = jwt.verify(req.headers.token, 'secretpunyasaya');
                req.body.currentUser = decoded;
                next();
                } catch(err) {
                    res.status('400').json({
                        message: err.message
                    });
                }
        }else {
            res.status('401').json({
                message: 'please login first'
            });
        }
        
    }
};