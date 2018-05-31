const express = require('express');
const controllers = require('./controllers');
const Router = express.Router();

Router.get('/',controllers.index)
      .post('/chat',controllers.chat);

module.exports = Router;