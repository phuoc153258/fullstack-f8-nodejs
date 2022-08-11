const User = require('../models/User');
const UserCourse = require('../models/UserCourse');
const Course = require('../models/Course');
const { UserDTO } = require('../dto/user');
const { UserCourseDTO } = require('../dto/userCourses');
const { CourseDTO } = require('../dto/course');

const getInfoLearningPath = async (userId) => {
    return {
        user: userId
            ? new UserDTO(await User.findOne({ _id: userId })).toSimple([
                  'fullName',
                  'avatar',
                  'slug',
              ])
            : '',
        userCourse: userId
            ? new UserCourseDTO(
                  await UserCourse.findOne({ idUser: userId }),
              ).toSimple(['detailCourses'])
            : '',
        courses: await Course.find({}).exec(),
    };
};

module.exports = {
    getInfoLearningPath,
};
