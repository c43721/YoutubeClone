import React, { useEffect, useState } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootsstrrap.min.css';
import { Modal } from 'bootstrap';


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
    /*<div>  
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Comments:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Comments go here!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
        </Modal.Dialog>
    </div>*/
  );
}