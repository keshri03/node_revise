const express=require('express');
const router=express.Router();
const Person=require('./../models/person');

router.post('/',async (req,res)=>{

    try{
        const data=req.body; 
        const newPerson= new Person(data);
        const response= await newPerson.save();
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
        const data= await Person.find();
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'server error ho gaya'});
    }     
})
router.get('/:worktype',async (req,res)=>{

    try{
        const worktype=req.params.worktype;
        if(worktype=='chef' || worktype=='manager' || worktype=='waiter'){
            const response= await Person.find({work: worktype});
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: 'notfound'});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'server error ho gaya'});
    }     
})
router.put('/:id',async (req,res)=>{

    try{
        const personId=req.params.id;
        const updatedPersonData=req.body;
        const response= await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new: true, // give response of updated document
            runValidators: true // will run model validations before updatinf;
        })
        if(!response){
            res.status(400).json({error: 'Aadmi nai milao bhai'});
        }
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'server error ho gaya'});
    }     
})
router.delete('/:id',async (req,res)=>{

    try{
        const personId=req.params.id;
        const response= await Person.findByIdAndDelete(personId);
        if(!response){
            res.status(400).json({error: 'Aadmi nai milao bhai'});
        }
        res.status(200).json({message: 'ho galao delete'});
    }
    catch(err){ 
        console.log(err);
        res.status(500).json({error:'server error ho gaya'});
    }     
})



module.exports=router;
