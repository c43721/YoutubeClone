const mongoose = require("mongoose");
const Reply = require("./Reply");

const CommentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  reply: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
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
