const express= require('express');
const router = express.Router();

const {homeDummy} = require('../controllers/homeController');

router.route("/homepage").get(homeDummy);



module.exports = router;