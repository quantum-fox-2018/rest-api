const express = require('express');
const app = express();
const logger = require('morgan')
const bodyParser = require('body-parser');

var usersroute = require('./routes/users')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/restapi1')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'))

app.use('/api', usersroute)

app.listen(4000,console.log('connect to express'))
