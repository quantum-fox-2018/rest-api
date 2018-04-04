const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    signUp : function ( req, res ) {
        models.User.create({
            username: req.body.username,
            password: req.body.password,
            salt: '',
            role: req.body.role,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(function(){
            res.status(200).json({
                message: "Data has been created!",
                username: req.body.username,
                role: req.body.role,
            })
        })
        .catch(function(err){
            res.status(200).json({
                message: err
            })
        })
    },
    signIn : function ( req, res ) {
        console.log('================= Secret key:',process.env.SECRETKEY)
        const password = req.body.password
        const username = req.body.username
        models.User.findOne({
            where: {username: username}
        })
        .then(function(dataUser){
            bcrypt.compare(password, dataUser.password)
            .then(function(isSame){
                if(isSame){
                    let token = jwt.sign({username: dataUser.username, role: dataUser.role}, process.env.SECRETKEY);
                    console.log('======', token);
                    res.status(201).json({
                        token: token
                    })
                }else{
                    res.status(200).json({
                        message: "username or password does not match"
                    })
                }
            })
        })
    },
    getAllUsers : function ( req, res ) {
        models.User.findAll({})
        .then(function(dataUsers){
            
            res.status(200).json({
                message: "Data Found!",
                user: dataUsers
            })

        })
    },
    getById : function ( req, res ) {
        models.User.findById(req.params.id)
        .then(function(dataUser){
            res.status(200).json({
                message: "Data Found!",
                user: dataUsers
            })
        })
    },
    createUser : function ( req, res ) {
        models.User.create({
            username: req.body.username,
            password: req.body.password,
            role: req.body.role,
        })
    },
    deleteUser : function ( req, res ) {
        models.User.destroy({
            where: {id : req.params.id}
        })
        .then(function()
        {
            res.status(200).json({
                message: `data with id= ${req.params.id} has been deleted`
            })
        })
    },
    updateUser : function ( req, res) {
        models.User.update({
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        })
    }
}