require('dotenv').config();
const express = require('express');
const app = express();

// Require DB
require('./config/connectdb.js');      

const PORT = 9134;  
 
app.get('/',(req,res)=>{
    res.send('WELCOME !!!');
})

app.get('/ping',(req,res)=>{
    res.send('Pong');
})

 
app.listen(PORT,()=>{
    console.log(`Server up at http://localhost:${PORT}` );
}) 