const express = require('express');
// const { getAllPlannets } = require('../planets/planets.controller'); 
const {
    getAllLaunches
} = require('./launches.controller')
const launchesRouter = express.Router();


launchesRouter.get('/launches', getAllLaunches);

module.exports = launchesRouter;