const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController')

router.get('/', controller.getAll)
router.get('/:slug', controller.getBySlug)
router.get('/admin/:_id', controller.getById)
router.get('/tags/:tag', controller.getByTag) 
router.post('/', controller.create)
router.put('/:_id', controller.put)
router.delete('/:_id', controller.delete)

module.exports = router