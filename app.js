const express = require('express');
const app = express();


const home = require('./routes/home');

app.use('/v1',home);

module.exports = app ;