import React from 'react';

export default function SearchResults({search, onClickVideoHandler}) {
    //Put use effect in here with the search
    //This useEffect will render out "Result" components programmatically using .map()
    //The .map will need to send the video id, this component's "onClickVideoHandler"
  return (
    <div>
      {search} is what you're searching for...
    </div>
  );
}
