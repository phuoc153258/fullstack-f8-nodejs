const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const UserCourse = require("../models/UserCourse");
const {
  ACCESS_TOKEN_SECRET_KEY,
  ACCESS_TOKEN_LIFE,
  ROLE_LEARNER,
  SALT_ROUNDS,
} = require("../config/env/index");
const { INVALID_INFORMATION } = require("../base/error");

const loginService = async (email, password) => {
  const user = await User.findOne({
    email: email,
  });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return INVALID_INFORMATION;
  return {
    token: await jwt.sign({ userId: user._id }, ACCESS_TOKEN_SECRET_KEY, {
      expiresIn: ACCESS_TOKEN_LIFE,
    }),
    message: "Login success !!!",
  };
};

const registerService = async (fullName, email, password) => {
  try {
    let isExitsUser = await User.findOne({ email: email }).exec();
    if (isExitsUser) return INVALID_INFORMATION;
    const user = new User({
      fullName: fullName,
      email: email,
      password: await bcrypt.hash(password, SALT_ROUNDS),
      role: ROLE_LEARNER,
    });
    const data = await user.save({});
    await new UserCourse({ idUser: data._id }).save();
    return {
      token: await jwt.sign({ userId: data._id }, ACCESS_TOKEN_SECRET_KEY, {
        expiresIn: ACCESS_TOKEN_LIFE,
      }),
      message: "Register success !!!",
    };
  } catch (error) {
    return INVALID_INFORMATION;
  }
};

module.exports = {
  loginService,
  registerService,
};
