const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const learnMiddleware = require('../middlewares/learn.middleware');
const baseMiddleware = require('../middlewares/base.middleware');
const learningController = require('../controllers/learn.controller');

router.put(
    '/handle/lesson-completed',
    authMiddleware.isAuthenticate,
    learnMiddleware.lessonCompleteCondition(),
    baseMiddleware.runConditionMiddleware,
    learningController.handleLessonCompleted,
);
// router.put('/handle/index-video', learningController.handleIndexVideo);
router.get('/:slug', authMiddleware.isAuthenticate, learningController.show);

module.exports = router;
