const learnService = require('../service/learn.service');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../helper/mongoose');

const show = async (req, res, next) => {
    const { slug } = req.params;
    const { userId } = req;
    const result = await learnService.getCourseLearningService(slug, userId);
    res.render('learn', {
        layout: 'mainLearn.hbs',
        course: mongooseToObject(result.course),
        user: mongooseToObject(result.userCourse),
    });
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

// // [PUT] /handle/index-video?_method=PUT
// handleIndexVideo(req, res, next) {
//     jwt.verify(req.cookies.token, ACCESS_TOKEN_SECRET_KEY, function (err, decoded) {
//         if (err) {
//             res.redirect('/auth');
//             return;
//         }
//         UserCourse.findOne({ idUser: decoded.user })
//             .then((user) => {
//                 for (
//                     let index = 0;
//                     index < user.detailCourses.length;
//                     index++
//                 ) {
//                     if (
//                         req.body.idCourse ==
//                         user.detailCourses[index].idCourse
//                     )
//                         user.detailCourses[index].indexVideo =
//                             req.body.indexVideo;
//                 }
//                 UserCourse.updateOne({ idUser: decoded.user }, user)
//                     .then(res.redirect('back'))
//                     .catch((err) => res.json(err));
//             })
//             .catch((err) => res.json(err));
//     });
// }

module.exports = {
    show,
    handleLessonCompleted,
};
