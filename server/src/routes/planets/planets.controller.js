const planets = require('../../models/planets.model');
function getAllPlannets(req, res) {
    return res.status(200).json(planets)
}

module.exports = {
    getAllPlannets, 
}