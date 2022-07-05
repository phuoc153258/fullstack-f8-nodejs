const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware')
const baseMiddleware = require('../middlewares/base.middleware')
const authController = require('../controllers/auth.controller');

router.post('/login/handler', authMiddleware.loginUserCondition(), baseMiddleware.runConditionMiddleware, authController.login);

router.post('/register/handler', authMiddleware.registerUserCondition(), baseMiddleware.runConditionMiddleware, authController.register);

router.get('/login', authController.show);

module.exports = router;
