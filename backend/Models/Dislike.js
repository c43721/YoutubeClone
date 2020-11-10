const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DislikeSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    commentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    }


}, { timestamps: true }) // helps createdAt and updatedAt properties.
// variable.createdAt; and variable.updatedAt;

const Dislike = mongoosae.model('Dislike', dislikeSchema);

module.exports = { Dislike }