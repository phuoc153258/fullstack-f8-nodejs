const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../helper/mongoose');
const profileService = require('../service/profile.service');

const show = async (req, res, next) => {
    try {
        let { user, userId } = req;
        let courses = await profileService.getInfoProfileService(user._id);
        res.render('profile', {
            layout: 'mainProfile.hbs',
            user: user,
            courses: courses,
            me: await profileService.getInfoUserService(userId),
        });
    } catch (error) {
        console.log(error);
        res.redirect('back');
    }
};

module.exports = {
    show,
};
