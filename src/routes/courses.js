const express = require('express');
const router = express.Router();
const courseMiddleware = require('../middlewares/course.middleware');
const baseMiddleware = require('../middlewares/base.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const courseController = require('../controllers/course.controller');

router.get(
    '/:slug',
    authMiddleware.isAuthenticate,
    courseMiddleware.showDetailsCourseCondition(),
    baseMiddleware.runConditionMiddleware,
    courseController.show,
);

module.exports = router;
