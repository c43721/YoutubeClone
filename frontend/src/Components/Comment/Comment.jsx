import React from 'react';

export default function Comment(props) {
  return (
    <div className="comment">
        <div className="comment-username">{props.username}</div>
        <div className="comment-body">{props.text}</div>
        <div className="bottom">
            <div className="likes">
                {props.likes} likes | {props.dislikes} dislikes
            </div>
            <div className="reply">Reply</div>
        </div>
    </div>
  );
}
