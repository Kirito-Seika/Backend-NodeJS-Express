require('dotenv').config();
const express = require('express');
const ViewEngineConfig = require("./config/view.engine");
const webRoutes = require("./routes/web");

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

ViewEngineConfig(app);

app.use('/',webRoutes);

app.listen(port, hostname,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
});