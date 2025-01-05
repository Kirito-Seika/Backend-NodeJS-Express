const express = require('express');
const path = require("node:path");

const app = express();
const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/kirito', (req, res) => {
    res.render('sample');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})