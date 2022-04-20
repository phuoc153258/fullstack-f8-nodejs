const Course = require('../models/Course');
const User = require('../models/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    home(req, res, next) {
        Course.find({})
            .then((courses) => {
                // res.json(courses)
                res.render('home', {
                    layout: 'mainHome.hbs',
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();
