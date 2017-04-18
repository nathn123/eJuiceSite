import express from 'express'
import mongoose from 'mongoose'

let app = express();

let port = process.env.PORT || 5000;
let mongoDB = 'mongodb://127.0.0.1/EJuiceDB';
//mongoose.connect(mongoDB);
app.listen(port, () => {
    console.log('listening on', port);
});

app.get('/recipe/flav/:flavour', (req, res) => {
    console.log(req.params.flavour);
});
app.get('/recipe/conc/:concentrate', (req, res) => {
    console.log(req.params.concentrate);
});
app.get('/recipe/name/:name', (req, res) => {
    console.log(req.params.name);
});
app.get('/concentrate/:flavour', (req, res) => {
    console.log(req.params.flavour);
});
app.get('/concentrate/:name', (req, res) => {
    console.log(req.params.name);
});
app.get('/login/:userID', (req, res) => {
    console.log(req.params.userID);
});
app.post('/recipe/add', (req, res) => {

});
app.post('/concentrate/add', (req, res) => {

});