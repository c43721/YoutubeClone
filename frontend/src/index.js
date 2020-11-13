import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import './index.css';
import $ from 'popper.js';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

