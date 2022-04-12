const express = require('express');
const path = require('path');
const mainRouter = express.Router();
const mainController = require(path.join(__dirname, '..', 'controller', 'mainController.js'))


mainRouter.get('/', mainController.home);
mainRouter.get('/login', mainController.login);
mainRouter.get('/register', mainController.register);


module.exports = mainRouter
