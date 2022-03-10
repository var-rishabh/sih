const express = require('express');
const app = express();
const data = require('./data');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./assets'));

const home = require('./routes/home');
const student = require('./routes/student')

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/v1',home);
app.use('/v1',student);


module.exports = app ;