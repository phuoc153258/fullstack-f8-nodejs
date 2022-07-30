const express = require('express');
const router = express.Router();
const { validateSlug } = require('../middlewares/validate/index');
const profileMiddleware = require('../middlewares/profile.middleware');
const baseMiddleware = require('../middlewares/base.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const profileController = require('../controllers/profile.controller');

router.get(
    '/@:slug',
    authMiddleware.isAuthenticateHomePage,
    validateSlug(),
    baseMiddleware.runConditionMiddleware,
    profileMiddleware.checkSlugUser,
    profileController.show,
);

module.exports = router;
