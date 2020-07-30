const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController')

router.post('/', controller.crete)

module.exports = router