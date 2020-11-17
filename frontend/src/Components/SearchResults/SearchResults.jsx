import React, { useEffect, useState } from "react";
import youtube from "../../api/youtube";
import Result from "./Result/Result";
import Container from "react-bootstrap/Container";
import "./SearchResults.css";

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
    <Container className="result-container-grid">
        {googleResponse.items.map((item) => (
            <Result
              key={item.id.videoId}
              videoId={item.id.videoId}
              {...item.snippet}
              onClickHandler={onClickVideoHandler}
            />
        ))}
    </Container>
  ) : null;
}
