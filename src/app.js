const express = require('express');
const morgan = require('morgan');
const { songRouter } = require('./routers/songsRouter');
const bodyParser = require('body-parser');

const app = express()
app.use(morgan('dev'));
app.use(bodyParser.json())

app.use('/songs', songRouter)

module.exports = app