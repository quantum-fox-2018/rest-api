const app = require('express')()
const bodyParser = require('body-parser')
const users = require('./routes/users')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/',users)
app.set('view engine','ejs')

app.listen(3000, ()=>{
  console.log('App listening on port 3000');
})
