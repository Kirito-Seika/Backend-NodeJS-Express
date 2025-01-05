const express = require('express');
const {
    getUsersAPI
} = require('../controllers/api.controller');
const routerAPI = express.Router();

routerAPI.get('/', (req, res) => {
    res.status(200).json({
        data: "success api"
    });
});
routerAPI.get('/users',getUsersAPI);

module.exports = routerAPI;