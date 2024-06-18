const express=require('express');
const app=express();
const dp=require('./db');
var bodyParser = require('body-parser'); //middleware
const router = require('./routes/personroutes');
const menurouter = require('./routes/menuroutes');
app.use(bodyParser.json());

app.get('/' ,(req,res)=>{
    res.send('ho gaya start');
})




app.use('/person',router);
app.use('/MenuItem',menurouter);

app.listen(3000,()=>{
    console.log("Sun raha h 3000 portwa par");
})

// comment added