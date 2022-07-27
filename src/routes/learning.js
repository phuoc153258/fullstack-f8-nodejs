const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const { learnValidate } = require('../middlewares/validate/index');
const baseMiddleware = require('../middlewares/base.middleware');
const learningController = require('../controllers/learn.controller');

router.put(
    '/handle/lesson-completed',
    authMiddleware.isAuthenticate,
    learnValidate.validatelessonComplete(),
    baseMiddleware.runConditionMiddleware,
    learningController.handleLessonCompleted,
);

router.put(
    '/handle/index-video',
    authMiddleware.isAuthenticate,
    learnValidate.validateswitchLesson(),
    baseMiddleware.runConditionMiddleware,
    learningController.handleIndexVideo,
);

router.get('/:slug', authMiddleware.isAuthenticate, learningController.show);

module.exports = router;
