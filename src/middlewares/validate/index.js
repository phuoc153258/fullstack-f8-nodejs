const { validateLoginInfo, validateRegisterInfo } = require('./auth');
const { validateSlugCourse } = require('./course');
const { validatelessonComplete, validateswitchLesson } = require('./learn');
const { validateSlug } = require('./profile');
const {validateSlugLearningPath} = require('./learningPath')

module.exports = {
    validateLoginInfo,
    validateRegisterInfo,
    validateSlugCourse,
    validatelessonComplete,
    validateswitchLesson,
    validateSlug,
    validateSlugLearningPath,
};
