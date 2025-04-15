// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000"; // change for production

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
