const { keyJWT } = require('../helper/key');
const jwt = require('jsonwebtoken');
const { body } = require('express-validator');

const loginUserCondition = () => {
    return [
        body('email')
            .isString().notEmpty().isEmail().withMessage('Email must be string, not empty and correct format !!!'),
        body('password')
            .isString().notEmpty().withMessage('Password must be string and not empty !!!'),
    ]
}

const registerUserCondition = () => {
    return [
        ...loginUserCondition(),
        body('fullName')
            .isString().notEmpty().withMessage('Full name must be string and not empty !!!'),
        body('rePassword')
            .isString().notEmpty().withMessage('Password must be string and not empty !!!')
    ]
}

const isAuthenticate = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        const decoded = await jwt.verify(token, keyJWT);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.redirect('/login');
    }
};

const isAuthenticateHomePage = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        const decoded = await jwt.verify(token, keyJWT);
        req.userId = decoded.userId;
    } catch (error) {}
    next();
};

module.exports = {
    isAuthenticate, isAuthenticateHomePage, loginUserCondition, registerUserCondition
};
