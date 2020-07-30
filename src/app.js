const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Settings
    // Body Parser
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
//  Routes
const indexRoute = require('./routes/index')

app.use('/', indexRoute)

module.exports = app;