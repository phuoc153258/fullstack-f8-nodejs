const { body } = require('express-validator');

const validatelessonComplete = () => {
    return [
        ...validateIdCourse(),
        body('isCompleted')
            .isBoolean()
            .notEmpty()
            .withMessage('isCompelted must be boolean !!!'),
        body('idLesson')
            .isString()
            .notEmpty()
            .isMongoId()
            .withMessage(
                'idLesson must be string, not empty and correct format ID !!!',
            ),
        body('idChapter')
            .isString()
            .notEmpty()
            .isMongoId()
            .withMessage(
                'idChapter must be string, not empty and correct format ID !!!',
            ),
    ];
};

const validateswitchLesson = () => {
    return [
        ...validateIdCourse(),
        body('indexVideo')
            .notEmpty()
            .toInt()
            .isNumeric()
            .withMessage('indexVideo must be number and not empty !!!'),
    ];
};

const validateIdCourse = () => {
    return [
        body('idCourse')
            .isString()
            .notEmpty()
            .isMongoId()
            .withMessage(
                'idCourse must be string, not empty and correct format ID !!!',
            ),
    ];
};

module.exports = {
    validatelessonComplete,
    validateswitchLesson,
};
