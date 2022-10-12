const express = require('express');
const router = express.Router();
const baseMiddleware = require('../middlewares/base.middleware')
const authMiddleware = require('../middlewares/auth.middleware');
const learningPathMiddleware = require('../middlewares/learningPath.middleware')
const {validateSlugLearningPath} = require('../middlewares/validate/index')
const learningPath = require('../controllers/learningPath.controller');

router.get('/:slug', authMiddleware.isAuthenticateHomePage, validateSlugLearningPath(), baseMiddleware.runConditionMiddleware, learningPathMiddleware.checkSlugLearningPath, learningPath.detail)

router.get('/', authMiddleware.isAuthenticateHomePage, learningPath.show);

module.exports = router;
