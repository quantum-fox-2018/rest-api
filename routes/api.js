const router = require('express').Router();
const User = require('../controllers/users.controller');

const auth = require('../middleware/auth')

router.get('/hello', (req, res) => {
    // res.json(`Print hello, ${req.query.name}`)
    res.send('Masuk ke halaman Dashboard')
})

router
    .post('/signup', User.createUser)
    .post('/signin', User.signIn)
    .get('/users',auth.cekAdminRole , User.readAll)
    .get('/users/:id', User.readOne)
    .post('/users',auth.cekAdminRole, User.createUser)
    .delete('/users/:id',auth.cekAdminRole, User.delete)
    .put('/users/:id', User.update)

module.exports = router;