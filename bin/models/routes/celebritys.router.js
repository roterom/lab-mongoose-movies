const express = require('express');
const router = express.Router();

const celebritiesController = require('../controllers/celebrities.controller');

router.get('/', celebritiesController.list)
/* router.get('/create', usersController.create)

router.post('/create', usersController.doCreate)

router.get('/:id', usersController.get)
router.post('/:id/delete', usersController.delete) */


module.exports = router;