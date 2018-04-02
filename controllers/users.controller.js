const {User} = require('../models/index');
const bcrypt = require('bcrypt'); 
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require('jsonwebtoken');

class UserController {
    static readAll(req, res) {
        User.findAll()
        .then(data => {
            res.status(200).json({
                message: 'Daftar data berhasil didapatkan',
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something when wrong!!',
                err
            })
        })
    }

    static readOne(req, res) {
        User.findById(req.params.id)
        .then(data => {
            res.status(200).json({
                message: 'Data berhasil didapatkan',
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something when wrong !!',
                err
            })
        })
    }

    static createUser(req, res) {
        let newPassword = bcrypt.hashSync(req.body.password, salt);
        User.create({
            username: req.body.username,
            password: newPassword,
            role: req.body.role,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(data => {
            res.status(200).json({
                message: 'Data berhasil ditambahkan',
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something when wrong!!',
                err
            })
        })
    }

    static delete(req, res) {
        User.destroy({
            where: { id: req.params.id }
        })
        .then(() => {
            res.status(200).json({
                message: 'Data berhasil di hapus'
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something when wrong!!'
            })
        })
    }

    static update(req, res) {
        User.update({
            username: req.body.username,
            password: req.body.password,
            role: req.body.role,
            createdAt: new Date()
        }, {
            where: { id: req.params.id }
        })
        .then(data => {
            res.status(200).json({
                message: 'Data berhasil diupdate',
                data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something when wrong!!',
                err
            })
        })
    }

    static signIn (req, res) {
        User.findOne({
            where: { username: req.body.username }
        })
        .then(dataLogin => {
            let hashPass = req.body.password
            let compare = bcrypt.compareSync(hashPass, dataLogin.password)

            let obj = {
                username: dataLogin.username,
                role: dataLogin.role
            };

            if(compare == true) {
                let token = jwt.sign(obj, 'jadi programer');
                res.status(200).json({
                    username: dataLogin.username,
                    password: dataLogin.password,
                    role: dataLogin.role,
                    token: token
                })
            } else {
                res.status(200).json({
                    message: 'Password tidak sama'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something when wrong !'
            })
        })
    }
}
module.exports = UserController;