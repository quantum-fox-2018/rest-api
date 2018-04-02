const router = require('express').Router();
const User = require('../controllers/users.controller');

const auth = require('../middleware/auth')

router.get('/hello', (req, res) => {
    res.json(`Print hello, ${req.query.name}`)
})

router
    .post('/signup', User.createUser) // jalan
    .post('/signin', User.signIn) // jalan
    .get('/users',auth.cekAdminRole, User.readAll) // jalan
    .post('/users', User.createUser) // jalan
    .get('/users/:id', User.readOne) // jalan
    .delete('/users/:id', User.delete) // jalan
    .put('/users/:id', User.update) // jalan


module.exports = router;