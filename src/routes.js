import React from "react";
import ReactDOM from "react-dom"
import App from "./pages/app"
import events from "./pages/events"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Routes = () =>{
  return(
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/proximos-eventos" component={events} />
    </Router>
  )
}

export default Routes;