const { body, param } = require('express-validator');

const validateSlug = () => {
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
const validateInfoUpdate = (req) => {
    for (const [key, value] of Object.entries(req.body)) {
        if (key == 'fullName')
            return [
                body('fullName')
                    .isString()
                    .isLength({ max: 30 })
                    .withMessage(
                        'fullName must be string and max length 30 !!!',
                    ),
            ];
        if (key == 'bio')
            return [
                body('bio')
                    .isString()
                    .isLength({ max: 100 })
                    .withMessage('bio must be string and max length 100 !!!'),
            ];
        if (key == 'facebook')
            return [
                body('facebook')
                    .isString()
                    .custom((value) => {
                        const regex = `(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)`;
                        return regex.exec(value);
                    })
                    .withMessage(
                        'facebook must be string and max length 30 !!!',
                    ),
            ];
    }
};

module.exports = {
    validateSlug,
    validateInfoUpdate,
};
