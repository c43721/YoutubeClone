import React from "react";
import Reply from "./Reply/Reply";
import "./Comment.css";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

export default function Comment(props) {
  return (
    <>
      <div className="comment">
        <div className="comment-username">
          <Badge pill variant="dark">
            {" "}
            {props.username}
          </Badge>
        </div>
        <div className="comment-body">{props.text}</div>
        <div className="comment-bottom">
          <div className="likes">
            {props.likes}{" "}
            <MdThumbUp
              className="icon like"
              onClick={() => props.likeComment(props._id)}
            />{" "}
            | {props.dislikes}{" "}
            <MdThumbDown
              className="icon dislike"
              onClick={() => props.dislikeComment(props._id)}
            />
          </div>
          {!props.reply.length ? (
            <Button className="reply" onClick={() => props.setReply(props._id)}>
              Reply
            </Button>
          ) : null}
        </div>
      </div>
      {props.reply.length ? (
        <Reply
          {...props.reply[0]}
          dislikeComment={props.dislikeComment}
          likeComment={props.likeComment}
          parent={props._id}
        />
      ) : null}
    </>
  );
}
