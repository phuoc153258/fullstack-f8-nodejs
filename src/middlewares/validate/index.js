const { validateLoginInfo, validateRegisterInfo } = require('./auth');
const { validateSlugCourse } = require('./course');
const { validatelessonComplete, validateswitchLesson } = require('./learn');
const { validateSlug, validateInfoUpdate } = require('./profile');

module.exports = {
    validateLoginInfo,
    validateRegisterInfo,
    validateSlugCourse,
    validatelessonComplete,
    validateswitchLesson,
    validateSlug,
    validateInfoUpdate,
};
