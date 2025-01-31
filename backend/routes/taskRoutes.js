const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

router.post('/createTask', tarefasController.createTask);

module.exports = router;