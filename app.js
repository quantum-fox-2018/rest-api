const express = require('express');
const routerAPI = require('./routes/api')
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', routerAPI)

app.listen(port, ()=> {
    console.log('Aplikasi berjalan di 3000')
})