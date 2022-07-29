const express = require('express');
const router = express.Router();
const { validateSlug } = require('../middlewares/validate/index')
const profileMiddleware = require('../middlewares/profile.middleware')
const baseMiddleware = require('../middlewares/base.middleware')
const profileController = require('../controllers/profile.controller')

router.get('/@:slug', profileMiddleware.checkSlugUser, validateSlug(), baseMiddleware.runConditionMiddleware, profileController.show);

module.exports = router;
