const express = require('express');
const path = require("node:path");
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/kirito', (req, res) => {
    res.render('sample');
})

app.listen(port, hostname,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
})