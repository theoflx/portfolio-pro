import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app"

import '/style/style.css';
import '/style/navbar.css';
import '/style/me.css';
import '/style/competances.css';
import '/style/projects.css';
import '/style/contact.css';


ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  )