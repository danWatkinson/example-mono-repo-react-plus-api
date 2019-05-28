const express = require('express');
const app = express();

const logger = require('morgan');
const joke = require('./joke');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/joke', joke);

module.exports = app;
