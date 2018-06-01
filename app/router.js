const express = require('express');
const controllers = require('./controllers');
const Router = express.Router();

Router.get('/',controllers.index)
      .post('/chat',controllers.validate,controllers.redirect);

module.exports = Router;