const Course = require('../models/Course');
const User = require('../models/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    home(req, res, next) {
        Course.find({})
            .then((courses) => {
                // res.render('courses', {
                //     layout: 'mainCourses.hbs',
                //     courses: mutipleMongooseToObject(courses),
                // });
                res.render('learn', {
                    layout: 'mainLearn.hbs',
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();
