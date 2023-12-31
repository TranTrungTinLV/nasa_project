const http = require('http');
// const mongoose = require('mongoose');
 
const PORT = process.env.PORT || 8080;
// const MONGO_URL = "mongodb+srv://nasa-api:aAXG6TlQordeZqty@nasacluster.tntdsje.mongodb.net/nasa?retryWrites=true&w=majority";

 
const app = require('./app');
 
const {
    loadPlanets
} = require('./models/planets.model');
const server = http.createServer(app);
 
// mongoose.connection.once('open', () => {
//     console.log('MongoDB connection ready!');
// });
 
// mongoose.connection.on('error', (error)=>{
//     console.error(error);
// });
 
async function startServer() {
//     await mongoose.connect(MONGO_URL, {
//          useCreateIndex: true, 
//    useFindAndModify: false, 
//    useNewUrlParser: true, 
//    useUnifiedTopology: true //dieu nay giup Mongoose communicate dc upadte vs cac DL mongo
//     });
    await loadPlanets();
    server.listen(PORT, () => {
        console.log(
            `Listening on Port ${PORT}...`
        )
    });
}
 
startServer();
 
console.log(PORT)