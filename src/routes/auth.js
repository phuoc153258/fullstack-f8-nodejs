const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/AuthController');

router.post('/handle' ,authController.login);
router.get('/', authController.show);

module.exports = router;
