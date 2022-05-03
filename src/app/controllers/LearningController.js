const User = require("../models/User");
const Course = require('../models/Course')
const UserCourse = require('../models/UserCourse')
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require("../../util/mongoose");
const jwt = require('jsonwebtoken');
const { keyJWT } = require("../../util/key");

class SiteController {
    // [GET] /learning
    show(req, res, next) {
        jwt.verify(req.cookies.token, keyJWT, function(err, decoded) {
            if(err) {
                res.redirect('/auth')
                return;
            }
            Course.findOne({slug: req.params.slug})
            .then(course => {
                UserCourse.findOne({idUser: decoded.user})
                    .then(user => {
                        res.render('learn', {
                            layout: 'mainLearn.hbs',
                            course: mongooseToObject(course),
                            user: mongooseToObject(user)
                        })
                    })
                    .catch(err => res.json(err))
            })
            .catch(err => {
                res.json(err)
            })
        });
    }
}

module.exports = new SiteController();
