const { param } = require('express-validator');

const validateSlugCourse = () => {
    return [
        param('slug')
            .isString()
            .notEmpty()
            .withMessage('Slug must be string and not empty !!!'),
    ];
};

module.exports = {
    validateSlugCourse,
};
