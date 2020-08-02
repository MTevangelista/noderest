const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController')
const authService = require('../services/auth')

router.get('/', controller.getAll)
router.get('/:slug', controller.getBySlug)
router.get('/admin/:_id', controller.getById)
router.get('/tags/:tag', controller.getByTag) 
router.post('/', authService.authorize, controller.create)
router.put('/:_id', authService.authorize, controller.put)
router.delete('/:id', authService.authorize, controller.delete)

module.exports = router