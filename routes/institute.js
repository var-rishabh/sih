const express= require('express');
const router = express.Router();


const { signIn , signUp} = require('../controllers/instituteController');

router.route("/institute/signin").get(signIn);
router.route("/institute/signup").get(signUp);
//router.route("/institute/session").post(signInsession);

module.exports = router;