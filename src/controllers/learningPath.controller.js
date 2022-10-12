const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require("../helper/mongoose");
const learningPathService = require("../service/learningPath.service");

const show = async (req, res, next) => {
  const { userId } = req;
  const result = await learningPathService.getInfoLearningPath(userId);
  res.render("learningPath", {
    layout: "mainLearningPath.hbs",
    user: result.user,
    userCourse: result.userCourse,
    courses: result.courses,
  });
};

const detail = async (req, res, next) => {
  res.render("learningPathDetails", {
    layout: "mainLearningPath.hbs",
  });
};

module.exports = {
  show,
  detail,
};
