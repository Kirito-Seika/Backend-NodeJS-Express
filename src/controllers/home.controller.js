const {getUserById, createUser, updateUserById, deleteUserById} = require("../services/crudService");
const User = require("../models/user");

const HomePage = (req, res) => {
    res.render('home');
}

const UserPage = async (req, res) => {
    let result = await User.find({});
    return res.render('user', {listUsers: result});
}

const CreatePage = (req, res) => {
    res.render('create');
}

const CreateUser = async (req, res) => {
    let {name, email, city} = req.body;
    await createUser(name, email, city);
    res.send('Create User Successfully');
}

const UpdatePage = async (req, res) => {
    const userID = req.params.id;
    let user = await User.findById(userID).exec();
    res.render('update', {userUpdate: user});
}

const UpdateUser = async (req, res) => {
    let {name, email, city, userId} = req.body;
    await updateUserById(name, email, city, userId);
    res.redirect('/user');
}

const DeletePage = async (req, res) => {
    const userID = req.params.id;
    let user = await User.findById(userID).exec();
    res.render('delete', {userDelete: user});
}
const DeleteUser = async (req, res) => {
    const {userId} = req.body;
    await deleteUserById(userId);
    res.redirect('/user');
}

module.exports = {HomePage, UserPage, CreatePage, CreateUser, UpdatePage, UpdateUser, DeletePage, DeleteUser};