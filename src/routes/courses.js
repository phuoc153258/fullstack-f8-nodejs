const express = require('express');
const router = express.Router();
const { validateSlugCourse } = require('../middlewares/validate/course');
const baseMiddleware = require('../middlewares/base.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const courseController = require('../controllers/course.controller');

router.get(
    '/:slug',
    authMiddleware.isAuthenticate,
    validateSlugCourse(),
    baseMiddleware.runConditionMiddleware,
    courseController.show,
);

module.exports = router;
