const express = require("express");

const router = express.Router();
const Reply = require("../models/reply");




router.get('/reply' , (req, res)=>{

    res.send("Reply Verified")
  
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


//Get Specific Word
router.get('/reply/:id', async (req,res)=>{
    
    try{
        Reply.find({forum_id:req.params.id})
        .populate("user","_id fName")
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