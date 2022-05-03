const { keyJWT } = require("../../util/key");
const jwt = require('jsonwebtoken');

module.exports = function AuthMiddleware(req, res, next) {
    let token = req.cookies.token
    jwt.verify(token, keyJWT, function(err, decoded) {
        if(err) {
            res.redirect('/login')
            return;
        }
        next();
    });
};