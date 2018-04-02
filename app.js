const express = require('express')
const morgan = require('morgan')
const app = express()

const users = require('./routes/users')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use('/api', users)

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server starts on ${port}`)
})