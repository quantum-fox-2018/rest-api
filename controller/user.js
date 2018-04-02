const Models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

class Controller {

    static signup(req,res) {

        const {id,username,password,email,role} = req.body;
        
        var hash = bcrypt.hashSync(password, saltRounds);

        let obj = {
            id: id,
            username: username,
            password: hash,
            email: email,
            role: role,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        Models.User.create(obj)
        .then (user => {
            res.status(200).json({
                message: "query successful"
            })
        })
    }


    static signin(req,res) {
        const {email,password} =  req.body;

        Models.User.findOne({where: {email:email}})
        .then(user => {

            let pass1 = bcrypt.compareSync(password, user.password); // true

            if (pass1 == true) {

                let token = jwt.sign({id: user.id, role: user.role}, 'katakunci')

                res.status(200).json({
                    message: "successful login !",
                    token: token,
                    userLogin: user
                })

            } else {
                res.status(400).json({
                    message: "incorrect email or password !"
                })
            }
        })
    }


    static getUsers(req,res) {

        Models.User.findAll()
        .then(users => {
            res.status(200).json({
                message: "successful query !",
                users: users
            })
        })
        .catch(err => {
            console.log(err);
        })

    }


    static getSingleUser(req,res) {

        let id = req.params.id

        Models.User.findById(id)
        .then(user => {
            res.status(200).json({
                message: "successful query !",
                user: user
            })
        })
        .catch(err => {
            console.log(err);
        })

    }


    static regUser(req,res) {

        const {id,username,password,email} = req.body;
    
        var hash = bcrypt.hashSync(password, saltRounds);

        let obj = {
            id: id,
            username: username,
            password: hash,
            email: email,
            role: 'user',
            createdAt: new Date(),
            updatedAt: new Date()
        }

        Models.User.create(obj)
        .then (user => {
            res.status(200).json({
                message: "query successful",
                user: user
            })
        })
    
    }


    static delUser(req,res) {

        let id = req.params.id

        Models.User.destroy({where:{id:id}})
        .then(user => {
            res.status(200).json({
                message: "User is successfully deleted !",
                user: user
            })
        })

    }


    static updateUser(req,res) {
        
        let id = req.params.id
        const {username,password,email,role} = req.body;

        var hash = bcrypt.hashSync(password, saltRounds);

        let obj = {
            username,
            password: hash,
            email,
            role
        }

        Models.User.update(obj, {where:{id:id}})
        .then(updatedUser => {

            res.status(200).json({
                message: "User is successfully updated !",
                updatedUser: updatedUser
            })

        })

    }



}


module.exports = Controller;