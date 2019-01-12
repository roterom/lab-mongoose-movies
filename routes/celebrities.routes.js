const express = require('express');
const router = express.Router();

const celebritiesController = require('../controllers/celebrities.controller');

router.get('/', celebritiesController.list)
router.get('/new', celebritiesController.create)

router.post('/new', celebritiesController.doCreate)

router.get('/:id', celebritiesController.get)
// router.post('/:id/delete', usersController.delete) 


module.exports = router;