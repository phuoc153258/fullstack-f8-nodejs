const Course = require('../models/Course');
const User = require('../models/User');
const UserCourse = require('../models/UserCourse');

const getCourseService = async (slug, userId) => {
    return {
        course: await Course.findOne({ slug: slug }),
        user: await User.findOne({ _id: userId }),
        userCourse: await UserCourse.findOne({ idUser: userId }),
    };
};

module.exports = {
    getCourseService,
};
