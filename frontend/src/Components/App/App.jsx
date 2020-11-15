import React, { useState } from "react";
import CommentContainer from "../CommentContainer/CommentContainer";
import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";

const API_URL = "http://localhost:3001/api";

export default function App() {
  //Central state for setting the search
  const [search, setSearch] = useState("");

  //Central place for the user's video selection, not for getting search result
  const [selection, setSelection] = useState("");

  function onClickVideo(videoId) {
    setSelection(videoId);
  }

  return (
    <div>
      <Search search={search} setSearch={setSearch} apiUrl={API_URL} />
      {search.length > 0 ? <SearchResults onClickVideoHandler={onClickVideo} search={search} /> : null}
      {/* selectin={search} is temp for testing, we will use "selection" once ready */}
      <CommentContainer selection={search} apiUrl={API_URL} />
    </div>
  );
}
