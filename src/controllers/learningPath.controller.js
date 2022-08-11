const {
    mongooseToObject,
    mutipleMongooseToObject,
} = require('../helper/mongoose');
const learningPathService = require('../service/learningPath.service');

const show = async (req, res, next) => {
    const { userId } = req;
    const result = await learningPathService.getInfoLearningPath(userId);
    res.render('learningPath', {
        layout: 'mainLearningPath.hbs',
        user: mongooseToObject(result.user),
    });
};

module.exports = {
    show,
};
