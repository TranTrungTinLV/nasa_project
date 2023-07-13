const http = require('http');
const PORT = process.env.PORT || 8000;
const app = require('./app')
const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(
        `Listening on Port ${PORT}...`
    )
});
console.log(PORT)