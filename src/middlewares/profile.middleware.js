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

module.exports = {
    checkSlugUser,
};
