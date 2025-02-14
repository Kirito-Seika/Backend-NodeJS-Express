const express = require('express');
const {
    getUsersAPI, CreateUsersAPI, UpdateUsersAPI,
    DeleteUsersAPI, UploadSingleFileAPI, UploadMultipleFilesAPI
} = require('../controllers/api.controller');
const {
    CreateCustomersAPI, CreateManyCustomersAPI, GetCustomersAPI,
    UpdateCustomersAPI, DeleteCustomerAPI, DeleteManyCustomersAPI
} = require('../controllers/customer.controller');
const {
    CreateProjectsAPI, GetProjectsAPI, UpdateProjectsAPI,
    DeleteProjectsAPI
} = require("../controllers/project.controller");
const {
    GetTasksAPI, CreateTasksAPI, UpdateTasksAPI,
    DeleteTasksAPI
} = require("../controllers/task.controller");
const routerAPI = express.Router();

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
routerAPI.delete('/many-customers', DeleteManyCustomersAPI);

//project
routerAPI.get('/projects', GetProjectsAPI);
routerAPI.post('/projects', CreateProjectsAPI);
routerAPI.put('/projects', UpdateProjectsAPI);
routerAPI.delete('/projects', DeleteProjectsAPI);

//task
//task
routerAPI.get('/tasks', GetTasksAPI);
routerAPI.post('/tasks', CreateTasksAPI);
routerAPI.put('/tasks', UpdateTasksAPI);
routerAPI.delete('/tasks', DeleteTasksAPI);

routerAPI.get('/info', (req, res) => {
    res.status(200).send({
        data: req.query
    })
});
routerAPI.get('/info/:name/:address/:phone/:email', (req, res) => {
    res.status(200).send({
        data: req.params
    })
});

module.exports = routerAPI;