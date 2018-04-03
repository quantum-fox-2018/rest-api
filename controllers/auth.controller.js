var db = require('../models/index.js');


module.exports = {
    signup: function(req, res){
        db.User.create(
            {
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
                RoleId: req.body.role,
                email: req.body.email,
                phone: req.body.phone
            })
            .then((user)=>{
                res.status('201').json({
                    message: 'user is succesfully created',
                    user: user
                });
            })
            .catch((err)=>{
                res.status('500').json({
                    message:err.message
                });
            });
    },

    signin: function(req, res){
        res.status('200').json({
            message:'signin succesful',
            token : req.headers.token
        });
    }
};