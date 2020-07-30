require("dotenv").config()

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();
const router = express.Router();

// Settings
    // Body Parser
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: false }))
    // Mongo
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(() => {
            console.log('MongoDB connected');
        }).catch((err) => {
            console.log(`Connection error: ${err}`);
        })
// Load the routes
const indexRoute = require('./routes/index')

app.use('/', indexRoute)

module.exports = app;