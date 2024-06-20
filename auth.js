const passport=require('passport');
const { Strategy } = require('passport-local');
const Person = require('./models/person');
const localStrategy=require('passport-local').Strategy; //username and password strategy

//authetication middlware starts  

passport.use( new localStrategy(async(user,givenpwd,done)=>{ // done is callback (error,user,info) 
    try{
        const response=await Person.findOne({username: user});
        if(!response){
            return done(null,false,{messgae: 'user nhi mila'});
        }
        const ispasswordsame= await response.comparePassword(givenpwd);
        if(ispasswordsame){
            return done(null,response);
        }
        else{
            return done(null,false,{messgae: 'Password sahi daal'})
        }
    }catch(err){
        console.log(err);
    }

}))

// app.use(localAuthMiddleware); // agar har request par authentication chahie

module.exports=passport;