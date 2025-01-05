const connection = require("../config/database");

const HomePage = (req, res) => {
    res.render('home');
}

const UserPage = (req, res) => {
    return res.render('user');
}

const CreateUser = (req, res) => {
    console.log("Check req: ", req.body);
    res.send('create-user');
}

module.exports = {HomePage, UserPage, CreateUser};