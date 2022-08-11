const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../helper/mongoose');
const profileService = require('../service/profile.service');

const show = async (req, res) => {
    try {
        let { user, userId } = req;
        let courses = await profileService.getInfoProfileService(user._id);
        res.render('profile', {
            layout: 'mainProfile.hbs',
            user: user,
            courses: courses,
            me: await profileService.getInfoUserService(userId, [
                '_id',
                'fullName',
                'avatar',
                'slug',
            ]),
        });
    } catch (error) {
        res.redirect('back');
    }
};

const settings = async (req, res) => {
    try {
        const { userId } = req;

        res.render('setting', {
            layout: 'mainSetting.hbs',
            user: await profileService.getInfoUserService(userId, [
                '_id',
                'fullName',
                'email',
                'bio',
                'avatar',
                'phoneNumber',
                'facebook',
                'slug',
            ]),
        });
    } catch (error) {
        res.redirect('back');
    }
};

const editProfile = async (req, res) => {
    try {
        const { info, userId } = req;
        await profileService.editInfoUserService(info, userId);
        res.redirect('back');
    } catch (error) {
        res.redirect('back');
    }
};

const editAvatar = async (req, res) => {
    try {
        const { userId, file } = req;
        profileService.editAvatarService(userId, file.path);
        res.redirect('back');
    } catch (error) {
        res.redirect('back');
    }
};

module.exports = {
    show,
    settings,
    editProfile,
    editAvatar,
};
