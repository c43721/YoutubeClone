const Reply = require("../Models/Reply");
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
router.post("/", async (req, res) => {
  try {
    const { username, text, parent } = req.body;
    const newReply = new Reply({
      parent,
      username,
      text,
    });

    await newReply.save();

    res.json({ reply: newReply });
  } catch (e) {
    res.status(500).json({ error: "Schema validation failed. " });
  }
});

module.exports = router;
