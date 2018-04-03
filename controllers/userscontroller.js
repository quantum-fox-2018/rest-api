const User = require('../models/Users')
var bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');

const saltRounds = 10;

module.exports = {
  getall (req,res) {
    User.find().then(data => {
      res.status(200).json({
        message : 'get all succes',
        data : data
      })
    })
  },
  signup (req,res) {
    var hashpassword = bcrypt.hashSync(req.body.password, saltRounds);
    let user = new User();
    user.username = req.body.username
    user.password = hashpassword
    user.status = req.body.status
    user.save().then(data=>{
      res.status(200).json({
        message: 'signup data succes',
        data
      })
    })
    .catch(err=>{
      res.status(500).json({
        message: 'data tidak ditemukan'
      })
    })
  },
  signin (req,res) {
    User.findOne({username:req.body.username}).then(data => {
      let check = bcrypt.compareSync(req.body.password, data.password);
      if (check) {
        let token = jwt.sign({id: data._id,username: data.username,status: data.status},process.env.SECRET)
        res.status(200).json({
          message: "anda berhasil login",
          token
        })
      }
      else {
        res.status(404).json({
          message: "password tidak ditemukan"
        })
      }
    }).catch(err => {
      res.status(404).json({
        messag: "username tidak ditemukan"
      })
    })
  },
  createuser (req,res) {
    var hashpassword = bcrypt.hashSync(req.body.password, saltRounds);
    let user = new User();
    user.username = req.body.username
    user.password = hashpassword
    user.status = 'user'
    user.save().then(data=>{
      res.status(200).json({
        message: 'create data succes',
        data
      })
    })
    .catch(err=>{
      res.status(500).json({
        message: 'data tidak ditemukan'
      })
    })
  },
  getbyid (req,res) {
    User.findOne({_id:req.params.id}).then(data => {
      res.status(200).json({
        message : 'get one succes',
        data
      })
    })
  },
  deleteuser (req,res) {
    User.deleteOne({_id:req.params.id}).then(data => {
      res.status(200).json({
        message: 'delete success'
      })
    })
  },
  updateuser (req,res) {
    let updatepassword = bcrypt.hashSync(req.body.password, saltRounds);
    User.update({_id:req.params.id},{$set:{username:req.body.username,password:updatepassword}}).then(data => {
      res.status(200).json({
        message: 'update succes',
        data
      })
    })
  }
}
