const express = require("express");
const router = express.Router();
const Post = require("../modules/Posts");

router.get("/", async (req, res) => {
  try{
    const posts=await Post.find();
    res.json(posts);
  }catch(err){
    res.json({ message: err });
  }
});

router.get("/specific-post", (req, res) => {
  res.send("We are on specific post");
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete
router.delete("/:postId",async (req,res)=>{
  try{
      const del=await Post.remove({_id:req.params.postId});
      res.json(del);
  }catch(err){
      res.json({message:err})
  }
});

//update 
router.patch("/:postId", async (req,res)=>{
  try{
    const updatedPost= await Post.updateOne(
      {_id:req.params.id},
      {$set:{title:req.body.title}}
    );
    res.json(updatedPost);
  }catch(err){
    res.json({message:err})
  }
});
module.exports = router;
