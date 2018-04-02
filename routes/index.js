const express = require('express');
// const {signup} =  require('../controller/user');
const userController = require('../controller/user');
const {decoding,decoAuthentication} = require('../middleware');

const app = express();
const routes = express.Router();

routes.post('/api/signup', userController.signup);
routes.post('/api/signin', userController.signin);
routes.get('/api/users', decoding, userController.getUsers);
routes.get('/api/users/:id', decoAuthentication, userController.getSingleUser);
routes.post('/api/users', decoding, userController.regUser);
routes.delete('/api/users/:id', decoAuthentication, userController.delUser);
routes.put('/api/users/:id', decoAuthentication, userController.updateUser);


module.exports = routes;