import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
//import CommentContainer from '..CommentContainer/CommentContainer.jsx';

export default function CommentForm() {
  const usernameRef = useRef();
  const commentRef = useRef();
  const videoRef = useRef();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const submittedUsername = usernameRef.current.value;
    const submittedCommentInfo = commentRef.current.value;
    const submittedVideo = videoRef.current.value;

    console.log(submittedCommentInfo, submittedUsername, submittedVideo);
  
    console.log(commentRef)
    axios.post('http://localhost:3001/api/comments', commentRef)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

      }
//    };    
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