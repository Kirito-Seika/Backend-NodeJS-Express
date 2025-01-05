const express = require("express");
const {
    HomePage, UserPage, CreatePage,
    CreateUser, UpdatePage, UpdateUser, DeletePage, DeleteUser
} = require("../controllers/home.controller");
const router = express.Router();

router.get('/', HomePage);
router.get('/user', UserPage);
router.get('/create', CreatePage);
router.post('/create-user', CreateUser);
router.get('/update/:id', UpdatePage);
router.post('/update-user', UpdateUser);
router.post('/delete-user', DeleteUser);
router.post('/delete-user/:id', DeletePage)

module.exports = router;