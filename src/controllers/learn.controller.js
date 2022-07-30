const learnService = require('../service/learn.service');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../helper/mongoose');

const show = async (req, res, next) => {
    try {
        const { slug } = req.params;
        const { userId } = req;
        const result = await learnService.getCourseLearningService(
            slug,
            userId,
        );
        res.render('learn', {
            layout: 'mainLearn.hbs',
            course: mongooseToObject(result.course),
            user: mongooseToObject(result.userCourse),
        });
    } catch (error) {
        res.redirect('back');
    }
};

const handleLessonCompleted = async (req, res, next) => {
    const { isCompleted, idLesson, idChapter, idCourse } = req.body;
    const { userId } = req;
    let lessonCompeletedObj = { idChapter, idLesson };
    if (isCompleted == 'false') {
        await learnService.handleLessonService(
            lessonCompeletedObj,
            idCourse,
            userId,
        );
    }
    res.redirect('back');
};

const handleIndexVideo = async (req, res, next) => {
    const { userId } = req;
    const { indexVideo, idCourse } = req.body;
    await learnService.switchLessonService(idCourse, indexVideo, userId);
    res.redirect('back');
};

module.exports = {
    show,
    handleLessonCompleted,
    handleIndexVideo,
};
