 const express = require('express');

const {
    getAllPlannets
} = require('./planets.controller')
const  plannetsRouter = express.Router();
plannetsRouter.get('/planets', getAllPlannets)

module.exports = plannetsRouter;  