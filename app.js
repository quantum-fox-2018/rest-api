const express = require('express')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded( {extended: false} ))
app.use(morgan('tiny'))

app.use('/api', require('./routes'))

app.listen(port, () => {
  console.log(`its running on ${port}`)
})