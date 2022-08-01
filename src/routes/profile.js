const express = require('express');
const router = express.Router();
const { validateSlug } = require('../middlewares/validate/index');
const profileMiddleware = require('../middlewares/profile.middleware');
const baseMiddleware = require('../middlewares/base.middleware');
const { validateInfoUpdate } = require('../middlewares/validate/index');
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

router.put(
    '/settings/edit',
    authMiddleware.isAuthenticate,
    validateInfoUpdate,
    baseMiddleware.runConditionMiddleware,
    profileMiddleware.checkValueEditProfile,
    profileController.editProfile,
);

router.get(
    '/settings',
    authMiddleware.isAuthenticate,
    profileController.settings,
);

module.exports = router;
