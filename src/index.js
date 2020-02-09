import React from "react"
import ReactDOM from "react-dom"
import Routes from "./routes"
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from 'react-service-worker';


ReactDOM.render(
  <Routes />,
  document.getElementById("root")
);

registerServiceWorker();
