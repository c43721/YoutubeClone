const Comment = require("../Models/Comment");
const express = require("express");

const router = express.Router();

router.get("/all", async (req, res) => {
  console.log("Route from " + req.method);
  const comments = await Comment.find();
  res.json({ comments });
});

// const update = await Comment.findByIdAndUpdate(
//   "videoId",
//   {
//     text: comment,
//   },
//   { new: true }
// );
// console.log(update);

// const comment = await Comment.findById({ videoId }).select({ text });
// console.log(comment);

module.exports = router;
