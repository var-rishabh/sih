const express= require('express');
const router = express.Router();


const { signIn , signUp, signInsession, pending,verifyOTP} = require('../controllers/instituteController');

router.route("/institute/signin").get(signIn);
router.route("/institute/signup").post(signUp);
router.route("/institute/session").post(signInsession);
router.route("/institute/verifyOTP").get(verifyOTP);
router.route("/institute/pending").get(pending);

module.exports = router;