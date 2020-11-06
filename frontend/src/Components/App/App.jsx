import React, { useEffect, useState } from 'react';
import Axios from "axios";

const API_URL = "http://localhost:3001/";

export default function App() {
  const [response, setResponse] = useState();

  useEffect(() => {
    Axios.get(API_URL)
      .then(response => {
        const { message } = response.data;
        setResponse(message)
      })
  }, []);

  return (
    <div>
      {response}
    </div>
  );
}