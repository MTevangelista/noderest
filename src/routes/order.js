const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController')
const authService = require('../services/auth')

router.get('/', authService.authorize, controller.getAll)
router.post('/', authService.authorize, controller.create)

module.exports = router