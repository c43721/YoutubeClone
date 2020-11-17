import React from 'react';

export default function Result(props) {
    //This component will render out each result from the SearchResults container
    //Look into using reach-bootstrap's "Card"
  return (
    <div>
      {props.title}
    </div>
  );
}
