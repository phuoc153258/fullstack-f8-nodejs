const User = require('../models/User');
const { UserDTO } = require('../dto/user');

const checkSlugUser = async (req, res, next) => {
    try {
        const { slug } = req.params;
        let user = await User.findOne({ slug: slug });
        if (!user) res.redirect('back');
        const fileds = ['fullName', 'avatar', 'slug', 'createdAt', '_id'];
        req.user = await new UserDTO(user).toSimple(fileds);
        next();
    } catch (error) {
        res.redirect('back');
    }
};

const checkValueEditProfile = async (req, res, next) => {
    try {
        const { userId } = req;
        const info = Object.entries(req.body);
        const user = await User.findOne({ _id: userId });
        for (const [key, value] of info)
            if (user[key] == value) return res.redirect('back');
        req.info = info;
        next();
    } catch (error) {
        res.redirect('back');
    }
};

module.exports = {
    checkSlugUser,
    checkValueEditProfile,
};
