const express = require("express");
const {
    HomePage, UserPage, CreatePage,
    CreateUser, UpdatePage, UpdateUser, DeletePage, DeleteUser
} = require("../controllers/home.controller");
const router = express.Router();

router.get('/', HomePage);
router.get('/user', UserPage);
router.get('/user/create', CreatePage);
router.post('/user/create-user', CreateUser);
router.get('/user/update/:id', UpdatePage);
router.post('/user/update-user', UpdateUser);
router.post('/delete-user', DeleteUser);
router.post('/delete-user/:id', DeletePage)

module.exports = router;