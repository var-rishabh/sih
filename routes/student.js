const express= require('express');
const router = express.Router();

const {signIn , signUp} = require('../controllers/studentController');

router.route("/student/signin").get(signIn);
router.route("/student/signup").get(signUp);



module.exports = router;