import React from "react";

export default function Video(props) {
  //Literally just a video component. Renders title on top, then the IFrame, then the video's description.
  return (
    <div>
      <Title title={props.title} />
      {/* IFrame tag goes here, which will get the selection from App component */}
      <Description description={props.description} />
    </div>
  );
}

function Description(props) {
  return <div>{props.description}</div>;
}

function Title(props) {
  return <div>{props.title}</div>;
}
