require("dotenv").config()

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();

// Settings
    // Body Parser
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: false }))
    // Mongo
        mongoose.connect(process.env.MONGO_URL, {
            useFindAndModify: false,
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
const productRoute = require('./routes/product')
const customerRoute = require('./routes/customer')
const orderRoute = require('./routes/order')

app.use('/', indexRoute)
app.use('/products', productRoute)
app.use('/customers', customerRoute)
app.use('/orders', orderRoute)

module.exports = app;