const Course = require('../models/Course');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../helper/mongoose');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses', {
                    layout: 'mainCourses.hbs',
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
