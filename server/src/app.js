const path = require('path');
const express = require('express');
const cors = require('cors');

const plannetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(plannetsRouter);
app.use(launchesRouter);
app.get('/*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
