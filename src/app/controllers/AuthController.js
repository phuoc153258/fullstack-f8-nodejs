const User = require("../models/User");
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require("../../util/mongoose");
const jwt = require('jsonwebtoken');
const { keyJWT } = require("../../util/key");

class SiteController {
    // [GET] /auth
    show(req, res, next) {
        res.render("login.hbs", {
            layout: "mainLogin.hbs",
        });
    }

    // [POST] /auth/login
    login(req, res, next) {
        User.findOne({
            email: req.body.email,
            password: req.body.password,
        })
            .then((user) => {
                if(user) {                   
                    jwt.sign({user: user._id}, keyJWT, { expiresIn: "1h"}, function(err, token) {
                    res.json({
                        message: "Success",
                        token: token
                    })
                });
                } else {
                    res.json('Login failed')
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = new SiteController();
