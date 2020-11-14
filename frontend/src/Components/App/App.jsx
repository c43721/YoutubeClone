import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// const API_URL = "http://localhost:3001/";

export default function App() {
  return (
    <div>
      Testing from Frontend
      <FormElement />
    </div>
  );
}
const Opinions = (props) => {
  const [comments, setComments] = useState({});

  useEffect(() => {
    axios
      .get("/api/comments")
      .then((response) => setComments(response.data[props.index]));
  }, [comments, props.index]);
};
//need to find an adequate axios post request, will do on Fri 11-13

function FormElement() {
  const usernameRef = useRef();
  const commentRef = useRef();
  const videoRef = useRef();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const submittedUsername = usernameRef.current.value;
    const submittedCommentInfo = commentRef.current.value;
    const submittedVideo = videoRef.current.value;

    console.log(submittedCommentInfo, submittedUsername, submittedVideo);
  };

  return (
    <Form onSubmit={(e) => onSubmitForm(e)}>
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

      <Form.Group controlId="videoidfield">
        <Form.Label>Video ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="542h51o641"
          ref={videoRef}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
