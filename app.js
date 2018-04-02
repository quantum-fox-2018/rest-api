const express = require('express');
const app = express();
const routeAPI = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Welcome home')
})

app.use('/api', routeAPI);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});