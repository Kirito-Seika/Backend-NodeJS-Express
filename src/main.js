require('dotenv').config();
const express = require('express');
const ViewEngineConfig = require("./config/view.engine");
const webRoutes = require("./routes/web");
const apiRoutes = require('./routes/api');
const connection = require('./config/database');
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

ViewEngineConfig(app);

app.use('/', webRoutes);

app.use('/v1/api/', apiRoutes);

(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });
    } catch (error) {
        console.log("Error connection: ", error);
    }
})()