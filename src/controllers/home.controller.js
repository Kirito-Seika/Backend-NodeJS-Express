const connection = require("../config/database");

const HomePage = (req, res) => {
    res.render('home');
}

const UserPage = (req, res) => {
    let user = [];
    connection.query(
        `SELECT * FROM users`,
        function (err, results, fields) {
            user = results;
            console.log("Check result: ",results);
            res.send(JSON.stringify(user));
        }
    )
}

module.exports = {HomePage, UserPage};