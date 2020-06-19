const express =  require('express');
const bodyParser = require('body-parser');

const config = require('../config.js');
const character = require('./components/character/network');
const user = require('./components/user/network');
const auth = require('./components/auth/network');
const errors = require('../network/errors');

const app = express();

app.use(bodyParser.json());

const contextService = require('request-context');
app.use(contextService.middleware('request'));

//Router
app.use('/api/character', character);
app.use('/api/user', user);
app.use('/api/auth', auth);

app.use(errors);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
})//1-puerto 3000 config , 2 callback

