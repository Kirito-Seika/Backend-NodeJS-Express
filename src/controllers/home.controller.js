const connection = require("../config/database");

const HomePage = (req, res) => {
    res.render('home');
}

const UserPage = (req, res) => {
    return res.render('user');
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