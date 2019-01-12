const express = require('express');
const router = express.Router();

const celebritiesController = require('../controllers/celebrities.controller');

router.get('/', celebritiesController.list)
router.get('/new', celebritiesController.create)

router.post('/new', celebritiesController.doCreate)

router.get('/:id', celebritiesController.get)
router.post('/:id/delete', celebritiesController.delete) 

router.get('/:id/edit', celebritiesController.edit) 
router.post('/:id', celebritiesController.doEdit) 

module.exports = router;