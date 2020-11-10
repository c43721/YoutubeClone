const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // I believe this designation takes a in a mongoDB document.
        ref: 'User'  //these generic data type: mongoose.Schema.Types.ObjectId get to an ObjectId, which is a number that id's the record in mongoDB.
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

const Like = mongoosae.model('Like', likeSchema);

module.exports = { Like }