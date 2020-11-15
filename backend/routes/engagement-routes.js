const { Reply } = require("../Models/Reply");
const Comment = require("../Models/Comment");
const express = require("express");

const router = express.Router();

/**
 * Engagement Post
 */
router.post("/:objectId", async (req, res) => {
  const { type, isComment = true } = req.body;

  if (!type) return res.json({ error: "No POST body." });

  let model;
  if (isComment) model = await Comment.findById(req.params.objectId);
  else model = await Reply.findById(req.params.objectId);

  if (!model)
    return res.json({ error: "Could not find Object from Database." });

  switch (type) {
    case "like":
      model.likes += 1;
      break;
    case "dislike":
      model.dislikes -= 1;
      break;
  }

  await model.save();

  res.json({ model });
});

module.exports = router;
