const express =require('express');
const mongoose=require('mongoose');
const router = express.Router();
const Forum = mongoose.model('Forum');

router.get('/forum', (req, res)=>{
    res.send("Hi I'm Forum Get Method")  
 });

// Create
router.post("/forumcreate", async (req, res) => {
    const {Title, FCategory, Description, Body, Pic} = req.body;
  try {
        if(!Title || !FCategory || !Description || !Body){
            return res.status(422).json({ error: "Please fill all the field" });
        }

        newForum = new Forum({
            Title,
            FCategory,
            Description,
            Body,
            Pic,
         });
        const forumCreated = await newForum.save()
        if(forumCreated){
            return res.status(201).json({ message: "Forum created successfully" });
        } 

    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err.message });
  }
});

//retrieve
router.get("/forumget", async (req, res) => {
  try{
    Forum.find().sort('-createdAt')
    .then((ForumList)=>{
        res.status(200).json(ForumList)
    }).catch((err)=>{
        console.log(err);
    })
}catch{
    return res.status(400).json({ error: "Can't Find the top forum data" });
} 
});
  

  router.get("/forumget/one/:id", async (req, res) => {
        
      try{
        Forum.findById(req.params.id).then((Forum)=>{
              res.status(200).json(Forum)
          }).catch((err)=>{
              console.log(err);
              return res.status(400).json({ error: "Something has error" });
          })
      }catch{
          return res.status(400).json({ error: "Something has error" });
      }


  });

module.exports = router;