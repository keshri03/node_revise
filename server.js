const express=require('express');
const app=express();
const dp=require('./db');
var bodyParser = require('body-parser'); //middleware
const router = require('./routes/personroutes');
const menurouter = require('./routes/menuroutes');
app.use(bodyParser.json());
require('dotenv').config();

app.get('/' ,(req,res)=>{
    res.send('ho gaya start');
})

app.use('/person',router);
app.use('/MenuItem',menurouter);

const port=process.env.PORT_NO;
app.listen(port,()=>{
    console.log("Sun raha h 3000 portwa par");
})

// comment added