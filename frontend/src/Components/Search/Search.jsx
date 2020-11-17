import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Search.css";

export default function Search({ setSearch }) {
  const [searchInput, setSearchInput] = useState("");

  function searchForVideo(e) {
    e.preventDefault();
    setSearch(searchInput);
  }

  return (
    <Form className="searchbox" onSubmit={(e) => searchForVideo(e)}>
      <Form.Group className="input" controlId="formBasicEmail">
        <Form.Control
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Search for videos..."
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
