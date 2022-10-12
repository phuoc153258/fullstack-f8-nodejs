const User = require('../models/User');
const UserCourse = require('../models/UserCourse');
const Course = require('../models/Course');
const { UserDTO } = require('../dto/user');
const { UserCourseDTO } = require('../dto/userCourses');
const { CourseDTO } = require('../dto/course');

const getInfoLearningPath = async (userId) => {
    const courses = await Course.find({}).exec()
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
        courses: courses.map(x => new CourseDTO(x).toSimple(['slug','icon','courseContent','_id','role'])),
    };
};

module.exports = {
    getInfoLearningPath,
};
