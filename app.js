const express = require('express');
const routerAPI = require('./routes/api')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', routerAPI)

app.listen(3000, ()=> {
    console.log('Aplikasi berjalan di 3000')
})