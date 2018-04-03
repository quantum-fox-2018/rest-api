const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models');

module.exports = {
    signup (req, res) {
        bcrypt.genSalt(10, function (err, salt) {
            if(err) {
                console.log(err);
            } else {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    if(err) {
                        console.log(err)
                    } else {
                        let user = models.User.build({
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            password: hash,
                            role: req.body.role,
                            createdAt: new Date(),
                            updatedAt: new Date()
                        })
                        user.save()
                        .then(user => {
                            res.status(201).json({
                                message: "success signup user",
                                user
                            })
                        })
                        .catch(err => {
                            res.status(400).json({
                                message: err
                            })
                        })
                    }
                })
            }
        })
    },
    signin (req, res) {
        let email = req.body.email
        let password = req.body.password
        
        models.User.findOne({
            where: {
                email: email
            }
        })
        .then(user => {
            bcrypt.compare(password, user.password, function(err, res2) {
                if(err) {
                    console.log(err)
                } else {
                    if(res2) {
                        let token = jwt.sign({id: user.id, role: user.role}, process.env.SECRET)
                        console.log("token=--", token);
                        res.status(200).json({
                            message: "login success",
                            user: token
                        })
                    } else {
                        res.status(500).json({
                            message: "login failed"
                        })
                    }
                }
            });
        })
        .catch(err => {
            res.status(400).json({
                message: "login gagal"
            })
        })
    },
    getAllUsers (req, res) {
        models.User.findAll()
        .then(users => {
            res.status(200).json({
                message: "Query users success",
                users
            })
        })
        .catch(err => {
            res.status(400).json({
                message: err
            })
        })
    },
    getOneUser (req, res) {
        let id = req.params.id;
        models.User.findById(id)
        .then(user => {
            res.status(200).json({
                message: "Query user success",
                user
            })
        })
        .catch(err => {
            res.status(400).json({
                message: err
            })
        })
    },
    createUser (req, res) {
        bcrypt.hash(req.body.password, 10, function(err, hash) {
            // Store hash in your password DB.
            let user = models.User.build({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hash,
                role: req.body.role
            })
            user.save()
            .then(user => {
                res.status(201).json({
                    message: "success create user",
                    user
                })
            })
            .catch(err => {
                res.status(400).json({
                    message: err
                })
            })
        });
    },
    deleteUser (req, res) {
        let id = req.params.id;
        models.User.findById(id)
        .then(user => {
            user.destroy()
            .then(() => {
                res.status(200).json({
                    message: "success delete user",
                    user
                })
            })
            .catch(err => {
                res.status(400).json({
                    message: err
                })
            })
        })
        .catch(err => {
            res.status(400).json({
                message: err
            })
        })
    },
    updateUser (req, res) {
        let id = req.params.id;
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let role = req.body.role;

        let user = models.User.findById(id)
        .then(user => {
            user.update({
                first_name: first_name || user.first_name,
                last_name: last_name || user.last_name,
                role: role || user.role
            })
            .then(user => {
                res.status(200).json({
                    message: "success update user",
                    user
                })
            })
            .catch(err => {
                res.status(400).json({
                    message: err
                })
            })
        })
        .catch(err => {
            res.status(400).json({
                message: err
            })
        })
    }
}