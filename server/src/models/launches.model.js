const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exployer X',
    rocket: 'Exployer IS1',
    launchDate: new Date('July 19, 2030'),
    destination: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);
module.exports = {
    launches
}