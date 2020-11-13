
import React, { useEffect, useState, useRef } from 'react';
import Axios from "axios";
//import 'bootstrap/dist/css/bootsstrrap.min.css';
import { Modal } from 'bootstrap';
//import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PromiseProvider } from 'mongoose';

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
  axios.get("/api/comments")
    .then(response => setComments(response.data[props.index])
    )}, [comments, props.index]);
}
//need to find an adequate axios post request, will do on Fri 11-13

function FormElement() {
  const usernameRef = useRef();
  const commentRef = useRef();
  const videoRef = useRef();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const submittedUsername = usernameRef.current.value;
    console.log(submittedUsername);
    console.log("Form submitted!");

    const submittedCommentInfo = commentRef.current.value;
    console.log(submittedCommentInfo);
    console.log('Did this comment actually console?');
    
    const submittedVideo = videoRef.current.value;
    console.log(submittedVideo);
    console.log("Wow three in a row.  Awesome!!!");
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
        <Form.Control type="text"
                       placeholder="I like this video a lot!"
                       ref={commentRef}
                       required />
      </Form.Group>

      <Form.Group controlId="videoidfield">
        <Form.Label>Video ID</Form.Label>
        <Form.Control type="text"
         placeholder="542h51o641"
         ref={videoRef}
         required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
