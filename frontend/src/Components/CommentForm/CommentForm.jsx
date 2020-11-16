import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function CommentForm({
  apiUrl,
  isReply,
  videoId,
  replyToComment,
  setIsReply,
  refreshComments
}) {
  const usernameRef = useRef();
  const commentRef = useRef();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const submittedUsername = usernameRef.current.value;
    const submittedCommentInfo = commentRef.current.value;

    const postBody = {
      videoId,
      username: submittedUsername,
      text: submittedCommentInfo,
    };

    if (isReply) return replyToComment(postBody);

    axios
      .post(`${apiUrl}/comments/`, postBody)
      .then((response) => {
        refreshComments()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={(e) => onSubmitForm(e)} className="comment-form">
      <Form.Group controlId="usernamefield">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your username"
          ref={usernameRef}
          required
        />
      </Form.Group>

      <Form.Group controlId="commentfield">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="I like this video a lot!"
          ref={commentRef}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {isReply ? "Reply" : "Comment"}
      </Button>

      {isReply ? (
        <Button variant="primary" onClick={() => setIsReply(false)}>
          Cancel Reply
        </Button>
      ) : null}
    </Form>
  );
}
