const courseService = require('../service/course.service');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../helper/mongoose');
const { INVALID_INFORMATION } = require('../base/error');

const show = async (req, res) => {
    try {
        const { slug } = req.params;
        const { userId } = req;
        const result = await courseService.getCourseService(slug, userId);
        if (!result.course) return res.redirect('/');
        res.render('courses', {
            layout: 'mainCourses.hbs',
            course: mongooseToObject(result.course),
            user: mongooseToObject(result.user),
            userCourse: mongooseToObject(result.userCourse),
        });
    } catch (error) {
        res.redirect('back');
    }
};

module.exports = {
    show,
};
