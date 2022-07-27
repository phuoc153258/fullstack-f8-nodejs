const User = require('../models/User');
const Course = require('../models/Course');
const UserCourse = require('../models/UserCourse');

const getCourseLearningService = async (slug, userId) => {
    const course = await Course.findOne({ slug: slug });
    let userCourse = await UserCourse.findOne({ idUser: userId });
    if (!userCourse.detailCourses.find((user) => user.idCourse == course._id)) {
        const registCourse = { idCourse: course._id, indexVideo: 1 };
        userCourse.detailCourses.push(registCourse);
        await UserCourse.findOneAndUpdate(
            { idUser: userId },
            { $push: { detailCourses: registCourse } },
        );
    }
    return {
        course: course,
        userCourse: userCourse,
    };
};

const handleLessonService = async (lessonCompeletedObj, idCourse, userId) => {
    await UserCourse.updateOne(
        {
            idUser: userId,
            'detailCourses.idCourse': idCourse,
        },
        {
            $push: {
                'detailCourses.$.lessonCompleted': lessonCompeletedObj,
            },
        },
    );
};

const switchLessonService = async (idCourse, indexVideo, userId) => {
    await UserCourse.updateOne(
        {
            idUser: userId,
            'detailCourses.idCourse': idCourse,
        },
        {
            $set: {
                'detailCourses.$.indexVideo': indexVideo,
            },
        },
    );
};

module.exports = {
    getCourseLearningService,
    handleLessonService,
    switchLessonService,
};
