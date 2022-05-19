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
    const error = {
      message: "Error in retrieving Forum",
      error: "Bad request",
    };
  
    Forum.aggregate([
      {
        $lookup: {
          from: "comments",
          let: { forum_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$forum_id", "$$forum_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                // user_id: 1,
                comment: 1,
                created_at: 1,
                // forum_id: 1,
              },
            },
          ],
          as: "comments",
        },
      },
      {
        $lookup: {
          from: "reply",
          let: { forum_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$forum_id", "$$forum_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                // user_id: 1,
                // reply: 1,
                // created_at: 1,
                // forum_id: 1,
                // created_at: 1,
              },
            },
          ],    
          as: "replyDetails",
        },
      },
      // {
      //   $unwind: {
      //     path: "$answerDetails",
      //     preserveNullAndEmptyArrays: true,
      //   },
      // },
      {
        $project: {
          __v: 0,
          // _id: "$_id",
          // answerDetails: { $first: "$answerDetails" },
        },
      },
    ])
      .exec()
      .then((forumDetails) => {
        res.status(200).send(forumDetails);
      })
      .catch((e) => {
        console.log("Error: ", e);
        res.status(400).send(error);
      });
  });
  

  router.get("/forumget/one/:id", async (req, res) => {
    try {
      let forumId = req.params.id;
      console.log(forumId);
  
      Forum.findById(forumId,(err,post)=>{
        if(err){
          return res.status(400).json({
              success:false, err
          });
      }
      return res.status(200).json({
          success:true, post
      });
    }) ;

    } catch (err) {
        console.log(err)
       res.status(400).send({
        message: "Forum not found",
      });
    }
  });

module.exports = router;