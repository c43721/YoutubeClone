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
  userId: { //for likes and dislikes
    type: mongoose.Schema.Types.ObjectId, // I believe this designation takes a in a mongoDB document.
    ref: 'User'  //these generic data type: mongoose.Schema.Types.ObjectId get to an ObjectId, which is a number that id's the record in mongoDB.
},
  commentId: {  //for likes and dislikes
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
},
  videoId: {  //for likes and dislikes
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video'
}
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
