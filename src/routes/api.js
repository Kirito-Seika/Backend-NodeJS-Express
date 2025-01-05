const express = require('express');
const {
    getUsersAPI, CreateUsersAPI, UpdateUsersAPI,
    DeleteUsersAPI, UploadSingleFileAPI, UploadMultipleFilesAPI
} = require('../controllers/api.controller');
const routerAPI = express.Router();
const {
    CreateCustomersAPI, CreateManyCustomersAPI, GetCustomersAPI,
    UpdateCustomersAPI, DeleteCustomerAPI
} = require('../controllers/customer.controller');

//user
routerAPI.get('/', (req, res) => {
    res.status(200).json({
        title: "NodeJS API",
        message: "NodeJS API Backend Zero",
        data: {
            auth: "Edan Nguyễn",
            website: "https://minhducnguyen.io.vn/",
            social: "https://www.facebook.com/EdanPrince2"
        }
    });
});
routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', CreateUsersAPI);
routerAPI.put('/users', UpdateUsersAPI);
routerAPI.delete('/users', DeleteUsersAPI);
routerAPI.post('/file', UploadSingleFileAPI);
routerAPI.post('/files', UploadMultipleFilesAPI);

//customer
routerAPI.post('/customers', CreateCustomersAPI);
routerAPI.post('/many-customers', CreateManyCustomersAPI);
routerAPI.get('/customers', GetCustomersAPI);
routerAPI.put('/customers', UpdateCustomersAPI);
routerAPI.delete('/customers', DeleteCustomerAPI);

module.exports = routerAPI;