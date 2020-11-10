
const mongoose = require ('mongoose');

const CommentSchema = new mongoose.Schema({
  username: {
      type: String,
      required: true,

  },
  comments: {
      type: String,
      required: true,
      type: [mongoose.Schema.Types.ObjectId],
  },
  date: {
      type: Date, default: Date.now,
  },
  others: {
    type: Schema.Type.Mixed, // I don't think this is coded right, but it takes in all the data not programmed.
  },
});

//  I found this function from the class that may
//  be helpful for you.

async function getComments() {
    const comments = await Comment.find();
    console.log(comments);
}
getComments();

module.exports = Comment = mongoose.model('comment', CommentSchema);


