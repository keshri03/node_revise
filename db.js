const mongoose= require('mongoose');
const mongoURL='mongodb://127.0.0.1:27017/hotels'

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("DB Connected");
})
db.on('error',(err)=>{
    console.log("DB error aa gaya",err);
})
db.on('disconnected',()=>{
    console.log("DB disconnected");
})

module.exports=db;