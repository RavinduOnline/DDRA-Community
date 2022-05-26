const express = require("express");

const router = express.Router();
const Reply = require("../models/reply");




router.get('/reply' , (req, res)=>{
    try{
        Reply.find().then((ReplyList)=>{
            res.status(200).json(ReplyList)
        }).catch((err)=>{
            console.log(err);
        })
    }catch{
        return res.status(400).json({ error: "Can't Find the top Reply data" });
    } 
  
 });


router.post('/replycreate',async (req,res) => {


    const { forum_id, reply, name, user } = req.body;

    try{

    newReply = new Reply({
        forum_id,
        reply,
        name,
        user,
    })

    const replyCreate = await  newReply.save();
    
    if(replyCreate){
        return res.status(201).json({ message: "Reply created successfully" });
    } 
}catch{
    return res.status(400).json({ error : "Reply not cerated"});
    }

})


//Get Specific Reply
router.get('/reply/single/:id', async (req,res)=>{
    
    try{
        const id = req.params.id;
        Reply.find({forum_id:id})
        .populate("user","_id fName lName")
        .sort('-createdAt')
        .then((ReplyData)=>{
            res.status(200).json(ReplyData)
        }).catch((err)=>{
            console.log(err);
            return res.status(400).json({ error: "Something has error" });
        })
    }catch{
        return res.status(400).json({ error: "Something has error" });
    }

});


//Get Specific Reply for User
router.get('/reply/user/:id', async (req,res)=>{
    
    try{
        const id = req.params.id;
        Reply.find({user:id})
        .populate("forum_id","_id Title")
        .sort('-createdAt')
        .then((ReplyData)=>{
            res.status(200).json(ReplyData)
        }).catch((err)=>{
            console.log(err);
            return res.status(400).json({ error: "Something has error" });
        })
    }catch{
        return res.status(400).json({ error: "Something has error" });
    }

});

module.exports = router;