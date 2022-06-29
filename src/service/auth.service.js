const User = require("../models/User");
const jwt = require('jsonwebtoken');
const { keyJWT } = require("../util/key");

const loginService = async ( email, password ) => {
    try {
        const user = await User.findOne({
            email: email,
            password: password,
        })
        if(!user) return 'Login failed'
        return await jwt.sign({ userId: user._id }, keyJWT, { expiresIn: "1h" });
    } catch (error) {
        return error
    }
}

module.exports = {
    loginService
}
