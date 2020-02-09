import React from "react"
import ReactDOM from "react-dom"
import App from "./pages/app"
import Events from "./pages/events"
import Ranking from "./pages/ranking"
import Profile from "./pages/profile"
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from 'react-service-worker';


ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path='/proximos-eventos' component={Events} />
    <Route exact path='/ranking' component={Ranking} />
    <Route exact path='/meu-perfil' component={Profile} />

  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
