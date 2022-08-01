const Course = require('../models/Course');
const User = require('../models/User');
const UserCourse = require('../models/UserCourse');
const { CourseDTO } = require('../dto/course');
const { UserDTO } = require('../dto/user');

const getInfoProfileService = async (id) => {
    const userCourse = await UserCourse.findOne({ idUser: id });
    const courses = await Course.find({}).exec();
    let coursesDTO = [];
    for (const course of courses) {
        for (const user of userCourse.detailCourses) {
            if (course._id == user.idCourse) coursesDTO.push(course);
        }
    }
    return coursesDTO.map((course) =>
        new CourseDTO(course).toSimple([
            '_id',
            'name',
            'image',
            'description',
            'slug',
        ]),
    );
};

const getInfoUserService = async (userId, fileds) => {
    const user = await User.findOne({ _id: userId }).exec();
    if (!user) return '';
    return new UserDTO(user).toSimple(fileds);
};

const editInfoUserService = async (info, userId) => {
    for (const [key, value] of info) {
        const user = await User.updateOne(
            { _id: userId },
            { $set: { [key]: value } },
        );
    }
};

module.exports = {
    getInfoProfileService,
    getInfoUserService,
    editInfoUserService,
};
