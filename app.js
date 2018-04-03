require('dotenv').config()
const express = require('express');
const app = express();
const logger = require('morgan')
const bodyParser = require('body-parser');

var usersroute = require('./routes/users')
var mongoose = require('mongoose')
// mongoose.connect('mongodb://restapi1:123456@ds231589.mlab.com:31589/restapi')
mongoose.connect('mongodb://localhost:27017/restapi1')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'))

app.use('/api', usersroute)
var port= proccess.env.PORT || 3000
app.listen(port,console.log('connect to express'))
