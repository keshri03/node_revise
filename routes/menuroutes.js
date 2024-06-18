const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem');

router.post('/',async (req,res)=>{

    try{
        const data=req.body; 
        const newItem= new MenuItem(data);
        const response= await newItem.save();
        console.log('data save ho gaya');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'server error ho gaya'});
    }     
})

router.get('/',async (req,res)=>{

    try{
        const data= await MenuItem.find();
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'server error ho gaya'});
    }     
})
router.get('/:tastetype',async (req,res)=>{
    try{
        const reqtype=req.params.tastetype;
        const availtypes=['sweet','spicy','sour'];
        if(availtypes.includes(reqtype)){
            const data= await MenuItem.find({taste: reqtype});
            res.status(200).json(data);
        }
        else{
            res.status(400).json({error: "yaha nhi hai, kahi or dhoond"});
        }
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'server error ho gaya'});
    }     
})

module.exports=router;