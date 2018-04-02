const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username:{
    type: String,
    required: [true,'username must be filled'],
    unique: [true,'username already exist']
  },
  password:{
    type: String,
    required: [true,'password must be filled'],
  },
  role:String
})

module.exports = mongoose.model('User',userSchema)