const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const baseMiddleware = require("../middlewares/base.middleware");
const {
  validateLoginInfo,
  validateRegisterInfo,
} = require("../middlewares/validate/index");
const authController = require("../controllers/auth.controller");

router.post(
  "/login/handler",
  authMiddleware.isAuthenticateLoginPage,
  validateLoginInfo(),
  baseMiddleware.runConditionMiddleware,
  authController.login
);

router.post(
  "/register/handler",
  authMiddleware.isAuthenticateLoginPage,
  validateRegisterInfo(),
  baseMiddleware.runConditionMiddleware,
  authController.register
);

router.get(
  "/login",
  authMiddleware.isAuthenticateLoginPage,
  authController.show
);

module.exports = router;
