import React, { useState, useEffect } from "react";
import Axios from "axios";
import Comment from "../Comment/Comment";
import Container from "react-bootstrap/Container";
import CommentForm from "../CommentForm/CommentForm";
import "./CommentContainer.css";

export default function CommentContainer({ apiUrl, selection }) {
  const [comments, setComments] = useState([]);
  const [isReply, setIsReply] = useState(false);
  const [replyParentId, setReplyParentId] = useState("");
  const [refreshComments, setRefreshComments] = useState(false);

  function updateReply(parentId) {
    setIsReply(true);
    setReplyParentId(parentId);
  }

  useEffect(() => {
    selection.length &&
      Axios.get(`${apiUrl}/comments/${selection}`).then((res) => {
        const { comments } = res.data;
        setComments(comments.reverse());
      });
  }, [selection, refreshComments]);

  function replyToComment({ username, text }) {
    try {
      Axios.post(`${apiUrl}/reply/${replyParentId}`, {
        username,
        text,
      });

      setRefreshComments(!refreshComments);
    } catch (er) {
      console.log(er);
    }
  }

  return (
    <Container>
      <CommentForm
        apiUrl={apiUrl}
        videoId={selection}
        isReply={isReply}
        replyToComment={replyToComment}
        setIsReply={setIsReply}
      />
      {comments.length
        ? comments.map((comment) => (
            <Comment key={comment._id} setReply={updateReply} {...comment} />
          ))
        : null}
    </Container>
  );
}
