const express = require('express');
const morgan = require('morgan')
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json()) // body parser replacer
app.use(express.urlencoded({extended: false})) // body parser replacer
app.use(morgan('dev')) // log purposes

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log('App is listening on port 3000');
})
