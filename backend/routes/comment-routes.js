const Comment = require("../Models/Comment");
const express = require("express");

const router = express.Router();
// /api/comments/ handler

/**
 * Get all comments from MongoDB
 */
router.get("/all", async (req, res) => {
  const comments = await Comment.find();
  res.json({ comments });
});

/**
 * Get all comments given a video ID
 */
router.get("/:videoId", async (req, res) => {
  const specificComment = await Comment.find({
    videoId: req.params.videoId,
  });
  if (!specificComment) return res.status(404).json({ comments: [] });
  res.json({ comments: specificComment });
});


/**
 * Create a new comment
 */
router.post("/", async (req, res) => {
  try {
    const { username, videoId, text } = req.body;

    const newComment = new Comment({
      videoId,
      username,
      text,
    });

    await newComment.save();

    res.json({ comment: newComment });
  } catch (e) {
    res.status(500).json({ error: "Schema validation failed. " });
  }
});

module.exports = router;
