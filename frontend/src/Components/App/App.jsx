import React, { useRef } from "react";
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

function FormElement() {
  const usernameRef = useRef();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const submittedUsername = usernameRef.current.value;
    console.log(submittedUsername);
    console.log("Form submitted!");
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
        <Form.Control type="text" placeholder="I like this video a lot!" />
      </Form.Group>

      <Form.Group controlId="videoidfield">
        <Form.Label>Video ID</Form.Label>
        <Form.Control type="text" placeholder="542h51o641" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
