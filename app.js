const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./assets'));

const home = require('./routes/home');
const student = require('./routes/student');
const institute = require('./routes/institute');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/v1',home);
app.use('/v1',student);
app.use('/v1',institute);


module.exports = app ;