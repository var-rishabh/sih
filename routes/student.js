const express = require("express");
const router = express.Router();

const {
  signIn,
  signUp,
  signInsession,
  signUpSession
} = require("../controllers/studentController");

router.route("/student/signin").get(signIn);
router.route("/student/signup").post(signUp);
router.route("/student/signUpSession").get(signUpSession);
router.route("/student/session").post(signInsession);

module.exports = router;