var db = require('../models/index.js');

module.exports = {
    getAllUsers: function(req, res){
        if(req.body.currentUser.role === "Admin"){
            db.User.findAll()
            .then((users)=>{
                res.status('200').json({
                    message:'successful get all user',
                    users: users
                });
            })
            .catch((err)=>{
                res.status('500').json({
                    message: err.message
                });
            })

        } else{
            res.status('403').json({
                message:'only admin can get all users data'
            });
        }
    },

    getUser: function(req, res){
        db.User.findById(req.params.id)
        .then((user)=>{
            if(user){
                res.status('200').json({
                    message: 'succesfull get user',
                    user: user
                });
            } else {
                res.status('400').json({
                    message: 'not an valid id',
                    user: user
                });
            }            
        })
        .catch((err)=>{
            res.status('500').json({
                message: err.message
            });
        })
    },

    createUser: function(req, res){
        if(req.body.currentUser.role === "Admin"){
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
        } else{
            res.status('403').json({
                message:'only admin can create new user data'
            });
        }
    },

    deleteUser: function(req, res){
        if(req.body.currentUser.role === "Admin"){
            db.User.destroy(
                {
                    where: {id: req.params.id}
                 })
            .then(rowDestroyed=>{
                if(rowDestroyed === 0){
                    res.status('400').json({
                        message: 'not valid id'
                    });
                } else {
                    res.status('200').json({
                        message: 'successfuly delete user'
                    });
                }
            })
            .catch(err =>{
                res.status('500').json({
                    message: err.message
                });
            });
        } else{
            res.status('403').json({
                message:'only admin can delete user data'
            });
        }
    },

    updateUser: function(req, res){
        db.User.update(
            {
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
                RoleId: req.body.role,
                email: req.body.email,
                phone: req.body.phone
            },{
                where:{id: req.params.id}
            })
            .then((user)=>{
                res.status('201').json({
                    message: 'user is succesfully updated',
                    user: user
                });
            })
            .catch((err)=>{
                res.status('500').json({
                    message:err.message
                });
            });
    }
};