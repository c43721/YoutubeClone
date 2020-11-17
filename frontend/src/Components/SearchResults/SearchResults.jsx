import React, { useEffect, useState } from "react";
import youtube from "../../api/youtube";
import Result from "./Result/Result";

export default function SearchResults({ search, onClickVideoHandler }) {
  const [googleResponse, setGoogleResponse] = useState();

  useEffect(() => {
    youtube
      .get("/search", {
        params: {
          q: search,
        },
      })
      .then((res) => {
        const { data } = res;
        setGoogleResponse(data);
      });
  }, [search]);

  return googleResponse ? (
    <>
      {googleResponse.items.map((item) => (
        <Result
          key={item.id.videoId}
          videoId={item.id.videoId}
          {...item.snippet}
          onClickHandler={onClickVideoHandler}
        />
      ))}
    </>
  ) : null;
}
