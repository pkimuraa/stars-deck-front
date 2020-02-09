import React from "react"
import ReactDOM from "react-dom"
import Routes from "./routes"
import registerServiceWorker from 'react-service-worker';
import PageLayout from './components/PageLayout';


ReactDOM.render(
  <Routes />,
  document.getElementById("root")
);

registerServiceWorker();
