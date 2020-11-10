
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
      type: Date, default: Date.now
  },
  time: {
      type: time, default: time.now
  },
});

module.exports = Comment = mongoose.model('comment', CommentSchema);