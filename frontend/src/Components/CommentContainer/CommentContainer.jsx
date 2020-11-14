import React, { useState, useEffect } from "react";
import Axios from "axios";
import Comment from "../Comment/Comment";
import Container from "react-bootstrap/Container";
import CommentForm from "../CommentForm/CommentForm";

export default function CommentContainer({ apiUrl }) {
  const [videoId, setVideoId] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    videoId.length &&
      Axios.get(`${apiUrl}/comments/${videoId}`).then((res) => {
        const { comments } = res.data;
        setComments(comments);
      });
  }, [videoId]);

  function replyToComment(parentId, ...rest) {
    Axios.post(`${apiUrl}/reply`, {
      parent: parentId,
      ...rest,
    });
  }




  return (
    <Container>
      <CommentForm />
      <input type="text" onChange={(e) => setVideoId(e.target.value)} />
      {comments.length
        ? comments.map((comment) => <Comment key={comment._id} {...comment} />)
        : null}
      
    </Container>
  );
}
