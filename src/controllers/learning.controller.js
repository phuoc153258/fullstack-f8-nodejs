const User = require("../models/User");
const Course = require('../models/Course')
const UserCourse = require('../models/UserCourse')
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require("../util/mongoose");
const jwt = require('jsonwebtoken');
const { keyJWT } = require("../util/key");

class SiteController {
    // [GET] /learning
    show(req, res, next) {
        jwt.verify(req.cookies.token, keyJWT, function (err, decoded) {
            if (err) {
                res.redirect('/auth')
                return;
            }
            Course.findOne({ slug: req.params.slug })
                .then(course => {
                    UserCourse.findOne({ idUser: decoded.user })
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

    // [PUT] /handle/lesson-completed?_method=PUT
    handleLessonCompleted(req, res, next) {
        let lessonCompeletedObj = {}
        lessonCompeletedObj.idChapter = req.body.idChapter
        lessonCompeletedObj.idLesson = req.body.idLesson
        jwt.verify(req.cookies.token, keyJWT, function (err, decoded) {
            if (err) {
                res.redirect('/auth')
                return;
            }
            if (req.body.isCompleted == 'false') {
                UserCourse.findOne({ idUser: decoded.user })
                    .then(user => {
                        for (let index = 0; index < user.detailCourses.length; index++) {
                            if (user.detailCourses[index].idCourse == req.body.idCourse) {
                                user.detailCourses[index].lessonCompleted.push(lessonCompeletedObj)
                            }
                        }
                        UserCourse.updateOne({ idUser: decoded.user }, user)
                            .then(res.redirect('back'))
                            .catch(err => res.json(err))
                    })
                    .catch(err => res.json(err))
            }
        });
    }

    // [PUT] /handle/index-video?_method=PUT
    handleIndexVideo(req, res, next) {
        jwt.verify(req.cookies.token, keyJWT, function (err, decoded) {
            if (err) {
                res.redirect('/auth')
                return;
            }
            UserCourse.findOne({ idUser: decoded.user })
                .then(user => {
                    for (let index = 0; index < user.detailCourses.length; index++) {
                        if(req.body.idCourse == user.detailCourses[index].idCourse)
                            user.detailCourses[index].indexVideo = req.body.indexVideo
                    }
                    UserCourse.updateOne({ idUser: decoded.user }, user)
                        .then(res.redirect('back'))
                        .catch(err => res.json(err))
                })
                .catch(err => res.json(err))
        });
    }

}

module.exports = new SiteController();
