const express=require('express');
const app=express();
const dp=require('./db');
var bodyParser = require('body-parser'); //middleware
const personrouter = require('./routes/personroutes');
const menurouter = require('./routes/menuroutes');
app.use(bodyParser.json());
require('dotenv').config();
const passport=require('./auth');



//middleware
const logRequest=(req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] request made to : ${req.originalUrl}`);
    next(); //mandatory , calss next phase (classback hai ye)
}
app.use(logRequest); // har endpoint ke request pe dikhane ke lie

//auth middleware
app.use(passport.initialize());
const localAuthMiddleware=passport.authenticate('local',{session: false});



app.get('/',(req,res)=>{
    res.send('ho gaya start');
})
app.use('/person',localAuthMiddleware,personrouter);
app.use('/MenuItem',menurouter);

const port=process.env.PORT_NO || 3000;
app.listen(port,()=>{
    console.log("Sun raha h 3000 portwa par");
})

// comment added