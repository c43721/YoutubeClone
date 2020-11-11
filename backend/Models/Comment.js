const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  videoId: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  reply: {
    type: mongoose.Schema.Types.ObjectId,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

/**
 * Logs out every comment from Database
 */
async function getComments() {
  const comments = await Comment.find();
  console.log(comments);
}

getComments();

module.exports = Comment = mongoose.model("comment", CommentSchema);
