const express = require('express');
const router = express.Router();

router.get('/:slug', (req, res, next) => {
    res.render('profile', {
        layout: 'mainProfile.hbs',
    });
});

module.exports = router;
