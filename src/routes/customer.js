const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerController')

router.get('/', controller.getAll)
router.post('/', controller.create)
router.post('/authenticate', controller.authenticate)

module.exports = router