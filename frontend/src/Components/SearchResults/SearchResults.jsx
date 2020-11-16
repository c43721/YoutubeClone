import React from "react";
import { useDebounce } from "use-debounce";

export default function SearchResults({ search, onClickVideoHandler, apiKey }) {
  const [searchTerm] = useDebounce(search, 350);

  //Put use effect in here with the searchTerm
  //This useEffect will render out "Result" components programmatically using .map()
  //The .map will need to send the video id, this component's "onClickVideoHandler"

  return <div>{searchTerm} is what you're searching for...</div>;
}
