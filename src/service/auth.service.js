const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { keyJWT } = require('../helper/key');

const loginService = async (email, password) => {

        const user = await User.findOne({
            email: email,
            password: password,
        });
        if (!user) return {
            message: 'Login failed'
        }
        return {
            token: await jwt.sign({ userId: user._id }, keyJWT, {
                expiresIn: '1h',
            }),
            message: 'Login success'
        }
};

const registerService = async (fullName, email, password) => {
    let isExitsUser = await User.findOne({email: email}).exec()
    console.log(isExitsUser)
    if(isExitsUser) return 'Invalid information'
    const user = new User({
        fullName: fullName,
        email: email,
        password: password,
        username: 'dsadas',
        bio: 'dsadsa',
        avatar: 'dsadsa',
        phoneNumber: 123,
        facebook: 'dsadsa',
        role: 1
    });
    // user.save({})
    //     .then((user) => {
    //         res.redirect(back)
    //     })
    return  "user"
}

module.exports = {
    loginService, registerService
};
