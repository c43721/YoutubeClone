import React from "react";
import Badge from "react-bootstrap/Badge";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

export default function Reply(props) {
  return (
    <div className="comment reply">
      <div className="comment-username"><Badge pill variant="dark">{' '}{props.username}</Badge></div>
      <div className="comment-body">{props.text}</div>
      <div className="bottom">
      <div className="likes">
            {props.likes}{" "}
            <MdThumbUp
              className="icon like"
              onClick={() => props.likeComment(props._id, false, props.parent)}
            />{" "}
            | {props.dislikes}{" "}
            <MdThumbDown
              className="icon dislike"
              onClick={() => props.dislikeComment(props._id, false, props.parent)}
            />
          </div>
      </div>
    </div>
  );
}
