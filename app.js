const express = require('express')
const morgan = require('morgan')
const app = express()

const users = require('./routes/users')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use('/api', users)

app.listen(3000, () => {
    console.log("server is running on 3000")
})