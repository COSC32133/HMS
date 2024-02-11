const express = require("express");
const postdb = require("../models/post");

const router = express.Router();

// Get all users
router.get("/", (req, res) => {
  postdb.find().exec((err, post) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPost: post,
    });
  });
});

// Add new user route
router.post("/save", (req, res) => {
  let newPost = new postdb(req.body);
  newPost.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Security details saved successfully !!",
    });
  });
});

// get a specific post
router.get("/singlepost/:id", (req, res) => {
  const postId = req.params.id;
  postdb.findById(postId, (err, post) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      post,
    });
  });
});

// update
router.put("/update/:id", (req, res) => {
  postdb.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, post) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Updated Succesfully",
      });
    }
  );
});

// delete post
router.delete("/delete/:id", (req, res) => {
  postdb.findByIdAndRemove(req.params.id).exec(async (err, deletedPost) => {
    if (err)
      return res.status(400).json({
        message: "Delete Unsuccesssful !!",
        err,
      });
    try {
      await sheduledb.findOneAndDelete({ post: req.params.id });
    } catch (error) {
      console.error(error);
    }
    return res.json({
      message: "Deleted !!",
      deletedPost,
    });
  });
});

module.exports = router;
