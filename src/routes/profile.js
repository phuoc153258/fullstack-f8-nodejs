const express = require('express');
const router = express.Router();
const { validateSlug } = require('../middlewares/validate/index');
const profileMiddleware = require('../middlewares/profile.middleware');
const baseMiddleware = require('../middlewares/base.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const uploadMiddleware = require('../middlewares/upload.middleware');
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
    baseMiddleware.runConditionMiddleware,
    profileMiddleware.checkValueEditProfile,
    profileController.editProfile,
);

router.post(
    '/settings/upload',
    authMiddleware.isAuthenticate,
    uploadMiddleware.uploadSingle,
    profileController.editAvatar,
);

router.get(
    '/settings',
    authMiddleware.isAuthenticate,
    profileController.settings,
);

module.exports = router;
