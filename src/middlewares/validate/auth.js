const { body } = require('express-validator');

const validateLoginInfo = () => {
    return [
        body('email')
            .isString()
            .notEmpty()
            .isEmail()
            .withMessage(
                'Email must be string, not empty and correct format !!!',
            ),
        body('password')
            .isString()
            .notEmpty()
            .withMessage('Password must be string and not empty !!!'),
    ];
};

const validateRegisterInfo = () => {
    return [
        ...validateLoginInfo(),
        body('fullName')
            .isString()
            .notEmpty()
            .withMessage('Full name must be string and not empty !!!'),
    ];
};

module.exports = {
    validateLoginInfo,
    validateRegisterInfo,
};
