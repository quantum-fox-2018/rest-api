const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000;
const routeAPI = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Welcome home')
})

app.use('/api', routeAPI);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});