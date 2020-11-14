import React, { useState, useEffect } from "react";
import Axios from "axios";
import Comment from "../Comment/Comment";

export default function CommentContainer({ apiUrl }) {
  const [videoId, setVideoId] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Axios.get(`${apiUrl}/comments/${videoId}`).then((res) => {
      const { comments } = res.data;
      setComments(comments);
    });
  }, [videoId]);

  return (
    <div>
      <input type="text" onChange={(e) => setVideoId(e.target.value)} />
      {comments.length &&
        comments.map((comment) => <Comment key={comment._id} {...comment} />)}
    </div>
  );
}
