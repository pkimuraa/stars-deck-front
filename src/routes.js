import React, { useState } from "react";
import App from "./pages/app"
import Events from "./pages/events"
import Ranking from "./pages/ranking"
import Profile from "./pages/profile"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Routes = () =>{
  const [menuActive, setMenuActive] = useState(3);


  return(
    <Router>
      <Route exact path="/" component={() => <App menuActive={menuActive} setMenuActive={setMenuActive} />} />
      <Route exact path='/proximos-eventos' component={() => <Events menuActive={menuActive} setMenuActive={setMenuActive} />} />
      <Route exact path='/ranking' component={() => <Ranking menuActive={menuActive} setMenuActive={setMenuActive} />} />
      <Route exact path='/meu-perfil' component={() => <Profile menuActive={menuActive} setMenuActive={setMenuActive} />} />

  </Router>
  )
}

export default Routes;