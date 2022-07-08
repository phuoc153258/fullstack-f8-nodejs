const { body } = require('express-validator');

const lessonCompleteCondition = () => {
    return [
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
    lessonCompleteCondition,
};
