const express = require("express");
const {
    HomePage, UserPage, CreatePage, CreateUser, UpdatePage
} = require("../controllers/home.controller");
const router = express.Router();

router.get('/', HomePage);
router.get('/user', UserPage);
router.get('/create', CreatePage);
router.post('/create-user', CreateUser);
router.get('/update', UpdatePage);

module.exports = router;