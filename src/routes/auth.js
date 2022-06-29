const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');

router.post('/handler', authController.login);
router.get('/', authController.show);

module.exports = router;
