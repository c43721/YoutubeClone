import React from "react";
import "./Video.css";

export default function Video({ video }) {
  const SOURCE_URL = `https://www.youtube.com/embed/${video.videoId}?autoplay=1&origin=http://example.com`;

  return (
    <div className="video-container">
      <Title title={video.title} />
      <iframe
        title="youtubePlayer"
        id="ytplayer"
        type="text/html"
        width="70%"
        height="600px"
        src={SOURCE_URL}
        frameBorder="0"
      ></iframe>
      <Description description={video.description} />
    </div>
  );
}

function Description(props) {
  return <div className="description">{props.description}</div>;
}

function Title(props) {
  return (
    <div className="title">
      <h1>{props.title}</h1>
    </div>
  );
}
