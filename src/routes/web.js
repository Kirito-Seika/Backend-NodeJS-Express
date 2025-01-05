const express = require("express");
const {
    HomePage, UserPage
} = require("../controllers/home.controller");
const router = express.Router();

router.get('/', HomePage);
router.get('/userpage', UserPage);

module.exports = router;