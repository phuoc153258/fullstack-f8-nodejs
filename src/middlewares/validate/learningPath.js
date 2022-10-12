const { param } = require('express-validator');

const validateSlugLearningPath = () => {
    return [
        param('slug')
            .isString()
            .notEmpty()
            .isSlug()
            .withMessage(
                'Slug must be string, not empty and correct format !!!',
            ),
    ];
};

module.exports = {
    validateSlugLearningPath
};
