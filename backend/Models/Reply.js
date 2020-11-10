const mongoose = require("mongoose");
const Comment = require("./Comment");

const ReplySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Reply = mongoose.model("reply", ReplySchema);
