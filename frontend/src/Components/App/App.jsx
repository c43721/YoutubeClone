import React from "react";
import CommentContainer from "../CommentContainer/CommentContainer";
import CommentForm from "../CommentForm/CommentForm";

const API_URL = "http://localhost:3001/api"

export default function App() {
  return (
    <div>
      <CommentContainer apiUrl={API_URL} />
      <CommentForm apiUrl={API_URL} />
    </div>
  );
}

