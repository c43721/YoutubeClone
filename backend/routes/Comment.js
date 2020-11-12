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




//We need to fix the problem of having two Comment.js files, both in the backend.
//This is a start on getting this info for you, hopefully to revise and make work.
//I know your aysnc/await function may be better, but I like the simplicity of 
//the functions that I found on youTube.  Of course, you can make a function instead
//of Comment and maybe call it at the end.  I'm really bummed my tech is always
//having problems.  You can always text me so I can use my phone.

//GET REQUEST:

getComment(); { //this needs a function, but this is the module/Component name.
    axios({
        method: 'get',
        url: 'http://localhost:3001',
        params: {
            _limit: 5 //limits the list of comments to 5
        }
    })
        .then(res => console.log(res))
        .catch(err => console.error(err));
}
getComment();

//POST REQUEST:

postComment(); {
    axios({
        method: 'post',
        url: 'http://localhost:3001',
        data: {
            videoId,  //we need a way to imput info for these categories.
            username,
            text
        }
    })
        .then(res => console.log(res))
        .catch(err => console.error(err));
}
postComment();

putComment(); {
    axios({
        method: 'put',
        url: 'http://localhost:3001/1',
        data: {
            videoId,  //we need a way to imput info for these categories.
            username,
            text
        }
    })
        .then(res => console.log(res))
        .catch(err => console.error(err));
}
putComment();
