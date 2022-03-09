const express = require('express');
const app = express();


app.use(express.static('./assets'));

const home = require('./routes/home');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/v1',home);

module.exports = app ;