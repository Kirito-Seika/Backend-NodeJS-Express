const Project = require('../models/Project');
const aqp = require('api-query-params');

const getAllProject = async (queryString) => {
    try {
        const page = queryString.page;
        const {filter, limit, population} = aqp(queryString);
        delete filter.page;
        let offset = (page - 1) * limit;
        return await Project.find(filter).populate(population).skip(offset).limit(limit).exec();
    } catch (err) {
        return null;
    }
}

const createProject = async (data) => {
    try {
        if (data.type === "EMPTY-PROJECT") {
            return await Project.create(data);
        }
        if (data.type === "ADD-USERS") {
            let myProject = await Project.findById(data.projectId).exec();
            for (let i = 0; i < data.usersArray.length; i++) {
                myProject.usersInfor.push(data.usersArray[i]);
            }
            return await myProject.save();
        }
        if (data.type === "ADD-TASKS") {
            let myProject = await Project.findById(data.projectId).exec();
            for (let i = 0; i < data.taskArr.length; i++) {
                myProject.tasks.push(data.taskArr[i]);
            }
            return await myProject.save();
        }
        if (data.type === "REMOVE-USERS") {
            let myProject = await Project.findById(data.projectId).exec();
            for (let i = 0; i < data.usersArr.length; i++) {
                myProject.usersInfor.pull(data.usersArr[i]);
            }
            return await myProject.save();
        }
    } catch (err) {
        return null;
    }
}

const updateProject = async (data) => {
    try {
        return await Project.updateOne({_id: data.id}, {...data});
    } catch (err) {
        return null;
    }
}

const deleteProject = async (id) => {
    try {
        return await Project.deleteById(id);
    } catch (err) {
        return null;
    }
}

module.exports = {getAllProject, createProject, updateProject, deleteProject}