const connection = require("../config/database");
const {getAllUsers} = require("../services/crudService");

const HomePage = (req, res) => {
    res.render('home');
}

const UserPage = async (req, res) => {
    let result = await getAllUsers();
    return res.render('user', {listUsers: result});
}

const CreatePage = (req, res) => {
    res.render('create');
}

const CreateUser = async (req, res) => {
    let {name, email, city} = req.body;
    console.log("Check name: ", name, "Check email: ", email, "Check city: ", city);
    let [result, fields] = await connection.query(
        `INSERT INTO users (email, name, city)
         VALUES (?, ?, ?)`, [email, name, city]
    );
    console.log("Check result: ", result);
    res.send('Create User Successfully');
}

module.exports = {HomePage, UserPage, CreatePage, CreateUser};