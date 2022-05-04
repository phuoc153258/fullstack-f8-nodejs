const express = require('express');
const router = express.Router();

const learningController = require('../app/controllers/LearningController');

router.put('/handle/lesson-completed', learningController.handleLessonCompleted);
router.get('/:slug', learningController.show);

module.exports = router;
