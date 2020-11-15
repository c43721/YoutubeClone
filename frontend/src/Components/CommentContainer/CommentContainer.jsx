import React, { useState, useEffect } from "react";
import Axios from "axios";
import Comment from "../Comment/Comment";
import Container from "react-bootstrap/Container";
import CommentForm from "../CommentForm/CommentForm";

export default function CommentContainer({ apiUrl, selection }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    selection.length &&
      Axios.get(`${apiUrl}/comments/${selection}`).then((res) => {
        const { comments } = res.data;
        setComments(comments);
      });
  }, [selection]);

  function replyToComment(parentId, ...rest) {
    Axios.post(`${apiUrl}/reply`, {
      parent: parentId,
      ...rest,
    });
  }

  return (
    <Container>
      <CommentForm />
      {comments.length
        ? comments.map((comment) => <Comment key={comment._id} {...comment} />)
        : null}
    </Container>
  );
}
