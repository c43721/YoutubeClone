const Comment = require("../Models/Comment");
const express = require("express");

const router = express.Router();

router.get("/all", async (req, res) => {
  const comments = await Comment.find();
  res.json({ comments });
});

router.get("/:videoId", async (req, res) => {
  const specificComment = await Comment.findOne({ videoId });
  res.json({ comments: specificComment });
});

// const update = await Comment.findByIdAndUpdate(
//   "videoId",
//   {
//     text: comment,
//   },
//   { new: true }
// );
// console.log(update);

module.exports = router;
