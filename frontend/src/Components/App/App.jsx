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

  //Function for when you click on a video you want to watch, will update all other components
  function onClickVideo(videoId) {
    setSelection(videoId);
  }

  return (
    <div>
      <Search search={search} setSearch={setSearch} apiUrl={API_URL} />

      {search ? (
        <SearchResults onClickVideoHandler={onClickVideo} search={search} />
      ) : null}

      {search ? <CommentContainer selection={search} apiUrl={API_URL} /> : null}

      {/* Uncomment when done with user clicking on a video to watch */}
      {/* {selection ? (
        <CommentContainer selection={selection} apiUrl={API_URL} />
      ) : null} */}
    </div>
  );
}
