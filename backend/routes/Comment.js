const Comment = require("../Models/Comment");

// if you get finished -- If that comment HAS A reply, send that reply as well in another array called "replies"
// DO NOT COPY PASTE, CONVERT TO USE THE ROUTER INSTEAD!!!
// app.get("/comments", async (req, res) => {
//     try {
//       const allComments = await Comment.find();
//       res.json({ comments: allComments });
//     } catch (err) {
//       res.json({ err });
//     }
//   });


//GET ALL COMMENT:

const comments = await Comment.find({ videoId, username, text })
    .select({ text });
    console.log(comments);

//POST A COMMENT:

const update = await Comment.findByIdAndUpdate('videoId', 
    {
        text: comment, 
    },
    { new: true }
);
console.log(update);




//GET A COMMENT:

const comment = await Comment.findById({ videoId })
    .select({ text });
    console.log(comment);




module.exports = Router;