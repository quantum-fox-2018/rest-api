let jwt =require('jsonwebtoken')
const bcrypt = require('bcrypt')

let db = require('../models')


module.exports = {
    getAllUsers : function(req, res){
        db.User.findAll()
        .then(function(users){
            res.status(200).json({
                message:"users found",
                data:users,
            })
        }).catch(function(err){
            console.log(err)
            res.status(400).json({
                message:err,
            })
        }) 
    },

    findUserById: function(req, res)    {
        db.User.findById(req.params.id)
        .then(function(user){
            console.log(user);
            res.status(200).json({
                message:"user found",
                data:user
            })
        })
        .catch(function(err){
            console.log(err)
            res.status(400).json({
                message:err,
            })
        })
    },

    createUser: function(req, res){
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
        }).then(function(newUser){
            res.status(201).json({
                message: "new user created",
                data: newUser
            })
        }).catch(function(err){
            res.status(400).json({
                message: err
            })
        })
    },

    signUserIn: function(req, res){
        let emailInput = req.body.email
        console.log(emailInput)
        let passwordInput = req.body.password
        db.User.findOne({
            where: {
                email: emailInput
            }
        }).then(function(user){
            if (!user){
                res.status(400).json({
                    message: "email is not found"
                })
            }else{
                if (bcrypt.compareSync(passwordInput, user.password)){
                    let token = jwt.sign({email: user.email, role: user.role}, process.env.SECRETKEY)
                    res.status(200).json({
                        message: "login succeed",
                        data: token
                    })
                }else{
                    res.status(400).json({
                        message: "email/password is not correct"
                    })
                }
            }
        })
    },

    updateUser: function(req, res){
        let idInput = req.params.id
        let email = req.body.email
        let password = req.body.password
        let role = req.body.role

        db.User.findOne({
            where: {
                id: idInput
            }
        }).then(function(user){
            return user.update({
                email:email,
                password:password,
                role:role,
            })
            .then(function(updatedUser){

            })
            .catch(function(err){
                res.status(400).json({
                    message: err
                })
            })
        }).then(function(user){
            res.status(200).json({
                message: "update success"
            })
        }).catch(function(err){
            res.status(400).json({
                message: err
            })
        })
    },

    deleteUser: function(req, res){
        let idInput = req.params.id
        db.User.destroy({
            where:{
                id: idInput
            }
        }).then(function(success){
            res.status(200).json({
                message: "delete success"
            })
        })
        .catch(function(err){
            res.status(400).json({
                message: err
            })
        })
    }

}