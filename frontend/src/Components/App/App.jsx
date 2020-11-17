import React, { useState } from "react";
import CommentContainer from "../CommentContainer/CommentContainer";
import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";
import "./App.css";

const API_URL = "http://localhost:3001/api";

export default function App() {
  //Central state for setting the search
  const [search, setSearch] = useState("");

  //Central place for the user's video selection, not for getting search result
  const [selection, setSelection] = useState({});

  //Function for when you click on a video you want to watch, will update all other components
  function onClickVideo(video) {
    console.log(video);
    setSelection(video);
  }

  return (
    <div>
      <h1 className="header">Youtube Clone</h1>
      <Search search={search} setSearch={setSearch} apiUrl={API_URL} />

      {search ? (
        <SearchResults onClickVideoHandler={onClickVideo} search={search} />
      ) : null}

      {/* {selection ? <Video apiKey={GOOGLE_API_KEY} video={selection} />} : null */}

      {/* Uncomment when done with user clicking on a video to watch */}
      {!selection ? (
        <CommentContainer videoId={selection.videoId} apiUrl={API_URL} />
      ) : null}
    </div>
  );
}
