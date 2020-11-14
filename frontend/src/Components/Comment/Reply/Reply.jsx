import React from "react";
import Badge from "react-bootstrap/Badge";

export default function Reply(props) {
  return (
    <div className="comment reply">
      <div className="comment-username"><Badge pill variant="dark">{' '}{props.username}</Badge></div>
      <div className="comment-body">{props.text}</div>
      <div className="bottom">
        <div className="likes">
          {props.likes} likes | {props.dislikes} dislikes
        </div>
      </div>
    </div>
  );
}
