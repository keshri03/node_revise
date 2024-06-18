const mongoose=require('mongoose');

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

    }
})

const Person= new mongoose.model('Person',personSchema);
module.exports=Person;