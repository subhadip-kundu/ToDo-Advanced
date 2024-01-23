require('dotenv').config();
const express = require('express');
const app = express();

// Require DB
require('./config/connectdb.js');

// Require from routes
const auth = require("./Routes/userAuth.js")

const PORT = 9134;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('WELCOME !!!');
})

app.get('/ping', (req, res) => {
    res.send('Pong');
})

app.use("/api/v1", auth);

app.listen(PORT, () => {
    console.log(`Server up at http://localhost:${PORT}`);
}) 