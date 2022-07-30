const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const {
    validatelessonComplete,
    validateswitchLesson,
} = require('../middlewares/validate/index');
const baseMiddleware = require('../middlewares/base.middleware');
const learningController = require('../controllers/learn.controller');

router.put(
    '/handle/lesson-completed',
    authMiddleware.isAuthenticate,
    validatelessonComplete(),
    baseMiddleware.runConditionMiddleware,
    learningController.handleLessonCompleted,
);

router.put(
    '/handle/index-video',
    authMiddleware.isAuthenticate,
    validateswitchLesson(),
    baseMiddleware.runConditionMiddleware,
    learningController.handleIndexVideo,
);

router.get('/:slug', authMiddleware.isAuthenticate, learningController.show);

module.exports = router;
