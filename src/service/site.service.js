const Course = require('../models/Course');
const User = require('../models/User');

const homeService = async (userId) => {
    try {
        const data = {
            courses: await Course.find().exec(),
            user: userId ? await User.findOne({_id: userId}).exec() : ''
        }
        return data
    } catch (error) {
        return error
    }
}

module.exports = {
    homeService
}
