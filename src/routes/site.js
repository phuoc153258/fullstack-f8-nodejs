const express = require('express');
const router = express.Router();

const siteController = require('../controllers/site.controller');
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/', authMiddleware.isAuthenticateHomePage, siteController.home);

module.exports = router;
