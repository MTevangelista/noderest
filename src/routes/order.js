const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController')

router.post('/', controller.create)

module.exports = router