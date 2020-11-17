import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import youtube from "../../api/youtube";
import Result from "./Result/Result"

export default function SearchResults({ search, onClickVideoHandler }) {
  const [searchTerm] = useDebounce(search, 1000);
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    youtube
      .get("/search", {
        params: {
          q: searchTerm,
        },
      })
      .then((res) => {
        const { data } = res;
        setSearchResults(data);
      });
  }, [searchTerm]);

  //The .map will need to send the video id, this component's "onClickVideoHandler"

  return searchResults ? (
    <>
      {searchResults.items.map((item) => (
        <Result key={item.id.videoId} {...item.snippet} />
      ))}
    </>
  ) : null;
}
