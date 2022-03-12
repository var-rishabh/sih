const express= require('express');
const router = express.Router();


const { signIn , signUp, signInsession} = require('../controllers/instituteController');

router.route("/institute/signin").get(signIn);
router.route("/institute/signup").post(signUp);
router.route("/institute/session").post(signInsession);

module.exports = router;