const express = require("express");
const {
    HomePage, UserPage,CreateUser
} = require("../controllers/home.controller");
const router = express.Router();

router.get('/', HomePage);
router.get('/user', UserPage);
router.post('/create-user', CreateUser);

module.exports = router;