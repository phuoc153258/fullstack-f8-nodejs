const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET_KEY } = require('../config/env/index');

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
    isAuthenticateLoginPage,
};
