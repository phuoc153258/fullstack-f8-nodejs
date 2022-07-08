const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET_KEY } = require('../variables/auth');
const { body } = require('express-validator');

const loginUserCondition = () => {
    return [
        body('email')
            .isString()
            .notEmpty()
            .isEmail()
            .withMessage(
                'Email must be string, not empty and correct format !!!',
            ),
        body('password')
            .isString()
            .notEmpty()
            .withMessage('Password must be string and not empty !!!'),
    ];
};

const registerUserCondition = () => {
    return [
        ...loginUserCondition(),
        body('fullName')
            .isString()
            .notEmpty()
            .withMessage('Full name must be string and not empty !!!'),
    ];
};

const isAuthenticate = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        const decoded = await jwt.verify(token, ACCESS_TOKEN_SECRET_KEY);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.redirect('/auth/login');
    }
};

const isAuthenticateHomePage = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        const decoded = await jwt.verify(token, ACCESS_TOKEN_SECRET_KEY);
        req.userId = decoded.userId;
    } catch (error) {}
    next();
};

const isAuthenticateLoginPage = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        const decoded = await jwt.verify(token, ACCESS_TOKEN_SECRET_KEY);
        return res.redirect('/');
    } catch (error) {
        next();
    }
};

module.exports = {
    isAuthenticate,
    isAuthenticateHomePage,
    loginUserCondition,
    registerUserCondition,
    isAuthenticateLoginPage,
};
