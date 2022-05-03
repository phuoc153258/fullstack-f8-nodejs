const express = require('express');
const router = express.Router();

const learningController = require('../app/controllers/LearningController');

router.get('/:slug', learningController.show);

module.exports = router;
