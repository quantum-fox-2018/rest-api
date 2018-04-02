const router = require('express').Router()

router.get('/',function(req,res){
  res.send('Home sweet home')
})

module.exports = router
