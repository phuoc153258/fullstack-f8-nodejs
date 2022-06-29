const { keyJWT } = require("../util/key");
const jwt = require('jsonwebtoken');

const isAuthenticate = async (req, res, next) => {
    try {
        const { token } = req.cookies
        const decoded = await jwt.verify(token, keyJWT);
        req.userId = decoded.userId
        next()
    } catch (error) {
        res.redirect('/login')
    }
}

const isAuthenticateHomePage = async (req, res, next) => {
    try {
        const { token } = req.cookies
        const decoded = await jwt.verify(token, keyJWT);
        req.userId = decoded.userId
    } catch (error) {
    
    }
    next()
}

module.exports = {
    isAuthenticate, isAuthenticateHomePage
}