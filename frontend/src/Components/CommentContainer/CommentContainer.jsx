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
      }).then(() => {
        setIsReply(false);
        setRefreshComments(!refreshComments);
      });
    } catch (er) {
      console.log(er);
    }
  }

  function likeComment(commentId, isComment = true, parentId = null) {
    let options = {
      type: "like",
      comment: isComment,
    };

    if (!isComment) options = { ...options, parentId: parentId };

    try {
      Axios.post(
        `${apiUrl}/engagement/${isComment ? "comment" : "reply"}/${commentId}`,
        options
      ).then((res) => {
        setRefreshComments(!refreshComments);
      });
    } catch (er) {
      console.log(er);
    }
  }

  function dislikeComment(commentId, isComment = true, parentId = null) {
    let options = {
      type: "dislike",
      comment: isComment,
    };

    if (!isComment) options = { ...options, parentId: parentId };

    try {
      Axios.post(
        `${apiUrl}/engagement/${isComment ? "comment" : "reply"}/${commentId}`,
        options
      ).then((res) => {
        setRefreshComments(!refreshComments);
      });
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
        refreshComments={() => setRefreshComments(!refreshComments)}
      />
      {comments.length
        ? comments.map((comment) => (
            <Comment
              key={comment._id}
              setReply={updateReply}
              likeComment={likeComment}
              dislikeComment={dislikeComment}
              {...comment}
            />
          ))
        : null}
    </Container>
  );
}
