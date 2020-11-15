import React, { useState } from "react";
import CommentContainer from "../CommentContainer/CommentContainer";
import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";

const API_URL = "http://localhost:3001/api";

export default function App() {
  //Central state for setting the search
  const [search, setSearch] = useState("");

  //Central place for the user's video selection
  const [selection, setSelection] = useState("");

  function onClickVideo(videoId) {
    setSelection(videoId);
  }

  return (
    <div>
      <Search search={search} setSearch={setSearch} apiUrl={API_URL} />
      {search.length > 0 ? <SearchResults onClickVideoHandler={onClickVideo} search={search} /> : null}
      <CommentContainer selection={selection} apiUrl={API_URL} />
    </div>
  );
}
