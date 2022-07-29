const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../helper/mongoose');
const profileService = require('../service/profile.service')

const show = async (req, res, next) => {
    res.render('profile', {
        layout: 'mainProfile.hbs',
    });
}

module.exports = {
    show
}