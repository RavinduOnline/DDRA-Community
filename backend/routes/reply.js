const express = require("express");

const router = express.Router();
const Reply = require("../models/reply");




router.get('/reply' , (req, res)=>{

    res.send("Reply Verified")
  
 });


router.post('/replycreate',async (req,res) => {


    const { forum_id, reply, user } = req.body;

    try{

    newReply = new Reply({
        forum_id,
        reply,
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


//update wordfilter
// router.put('/adminmanage/wordfilter/update/:id', async (req,res)=>{

//     const {word, wcategory} = req.body;
//   try {
//         if(!word || !wcategory){
//             return res.status(422).json({ error: "Please fill all the field" });
//         }

//         const lowerCaseWord = word.toLowerCase();
//         let findWord = await WordFilter.findOne({ word:lowerCaseWord });
//         if (findWord) {
//           return res.status(400).json({ error: "This Word already exists" });
//         }

//         else{
//             WordFilter.findByIdAndUpdate(
//                 req.params.id,{
//                     word:lowerCaseWord,
//                     wcategory,
//                 },
//                 (err,post)=>{
//                     if(err){
//                         return res.status(400).json({
//                             error:err 
//                         });
//                     }

//                     return res.status(200).json({
//                         success:"Word Filter Updated Successfully"
//                     });
//                 }
//             );
//         }

//   }catch{

//   }
// });


module.exports = router;