const { validationResult } = require('express-validator');

const runConditionMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.redirect('back')
    next();
};

module.exports = {
    runConditionMiddleware,
};
