const { Reply } = require("../Models/Reply");
const Comment = require("../Models/Comment");
const express = require("express");

const router = express.Router();

/**
 * Get all replies from MongoDB
 */
router.get("/", async (req, res) => {
  const replies = await Reply.find();
  res.json({ replies });
});

/**
 * Create a new reply
 */
router.post("/:parentId", async (req, res) => {
  try {
    const { username, text } = req.body;

    if (!username || !text) return res.json({ error: "No POST body." });
    const parentComment = await Comment.findById(req.params.parentId);

    if (!parentComment)
      return res.status(401).json({ error: "No parent comment ID found" });

    const newReply = new Reply({
      username,
      text,
      parent: req.params.parentId,
    });

    parentComment.reply.push(newReply);

    await newReply.save();
    await parentComment.save();

    res.json({ reply: newReply });
  } catch (e) {
    res.status(500).json({ error: "Schema validation failed. " });
  }
});

module.exports = router;
