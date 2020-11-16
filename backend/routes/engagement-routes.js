const { Reply } = require("../Models/Reply");
const Comment = require("../Models/Comment");
const express = require("express");

const router = express.Router();

/**
 * Engagement Post (For comments only)
 */
router.post("/comment/:objectId", async (req, res) => {
  const { type } = req.body;

  if (!type) return res.json({ error: "No POST body." });

  const model = await Comment.findById(req.params.objectId);

  if (!model)
    return res.json({ error: "Could not find Object from Database." });

  switch (type) {
    case "like":
      model.likes += 1;
      break;
    case "dislike":
      model.dislikes += 1;
      break;
  }

  await model.save();

  res.json(model);
});

router.post("/reply/:objectId", async (req, res) => {
  const { type, parentId } = req.body;

  if (!type) return res.json({ error: "No POST body." });
  if (!parentId) return res.json({ error: "No parent ID!" });

  const model = await Comment.findById(parentId);

  if (!model)
    return res.json({ error: "Could not find Object from Database." });

  const reply = model.reply[0];

  switch (type) {
    case "like":
      reply.likes += 1;
      break;
    case "dislike":
      reply.dislikes += 1;
      break;
  }

  await model.save();

  res.json(model);
});

module.exports = router;
