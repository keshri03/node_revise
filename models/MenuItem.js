const mongoose=require('mongoose');

const menuItemSchema=new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    taste:{
        type: String,
        enum:['sweet','spicy','sour'],
        require: true
    },
    is_drink: {
        type: Boolean,
        defualt: false
    },
    ingredients:{
        type: [String],
        deafult: []
    },
    num_sales: {
        type: Number,
        defualt: 0
    }
})

const MenuItem= new mongoose.model('MenuItem',menuItemSchema);
module.exports=MenuItem; 