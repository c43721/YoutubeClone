import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Result(props) {
  return (
    <Card style={{ width: "18rem", display: "flex" }}>
      <Card.Body>
        <Card.Img variant="top" src={props.thumbnails.medium.url} />
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button
          variant="primary"
          onClick={() =>
            props.onClickHandler({
              title: props.title,
              description: props.description,
              videoId: props.videoId,
            })
          }
        >
          Watch
        </Button>
      </Card.Body>
    </Card>
  );
}
