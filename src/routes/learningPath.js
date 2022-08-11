const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const learningPath = require('../controllers/learningPath.controller');

router.get('/', authMiddleware.isAuthenticateHomePage, learningPath.show);

module.exports = router;
