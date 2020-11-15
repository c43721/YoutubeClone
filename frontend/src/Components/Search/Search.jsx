import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Search.css";

export default function Search({ search, setSearch }) {
  function searchForVideo(e) {
    e.preventDefault();
  }

  return (
    <Form className="searchbox" onSubmit={(e) => searchForVideo(e)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Search for videos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}
