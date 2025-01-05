const connection = require("../config/database");

const HomePage = (req, res) => {
    res.render('home');
}

const UserPage = (req, res) => {
    return res.render('user');
}

module.exports = {HomePage, UserPage};