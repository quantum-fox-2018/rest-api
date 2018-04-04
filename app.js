const express = require('express')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded( {extended: false} ))
app.use(morgan('tiny'))

app.use('/', require('./routes'))

app.listen(port, () => {
  console.log(`its running on ${port}`)
})