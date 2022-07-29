const { body, param } = require('express-validator');

const validateSlug = () => {
    return [
        param('slug')
            .isString()
            .notEmpty()
            .isSlug()
            .withMessage('Slug must be string, not empty and correct format !!!')
    ];
};

module.exports = {
    validateSlug
};
