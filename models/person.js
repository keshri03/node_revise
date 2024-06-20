const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const personSchema=new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    work:{
        type: String,
        enum:['waiter','manager','chef'],
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    address: String,
    salary: {
        type: Number,
        require: true

    },
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
})


personSchema.methods.comparePassword= async function(givenpassword){
    try{
        const ismatch=await bcrypt.compare(givenpassword,this.password);
        return ismatch;

    }catch(err){
        throw err;
    }
}
// pre(by mongoose) middleware to perform action data before saving it
personSchema.pre('save', async function(next){ // here next will to save in mongoose
    try{
        // hash passwoed geearyion
        const person=this; //this here represent the onject of schemea which is going to be saved
        // hash only if password is modified or new user
        if(!person.isModified('password')) next();
        const salt=await bcrypt.genSalt(10); // can manually give salt='this is salt';// gemSSalt(round) more rounds more complex password
        const hashedPassword= await bcrypt.hash(person.password,salt);
        person.password=hashedPassword;
        next();
    }
    catch(err){
        return next(err);
    }
});
const Person= new mongoose.model('Person',personSchema);
module.exports=Person;