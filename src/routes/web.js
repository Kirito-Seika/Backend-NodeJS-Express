const express = require("express");
const {HomePage} = require("../controllers/home.controller");
const router = express.Router();

router.get('/', HomePage);

module.exports = router;