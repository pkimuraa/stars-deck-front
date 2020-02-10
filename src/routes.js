import React from "react";
import App from "./pages/app";
import Events from "./pages/events";
import EventShow from "./pages/EventShow";
import NewEvent from "./pages/NewEvent";
import Ranking from "./pages/ranking";
import Profile from "./pages/profile";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/proximos-eventos" component={Events} />
      <Route exact path="/ranking" component={Ranking} />
      <Route exact path="/novo-evento" component={NewEvent} />
      <Route exact path="/meu-perfil" component={Profile} />
      <Route exact path="/eventos/:id" component={EventShow} />
    </Router>
  );
};

export default Routes;
