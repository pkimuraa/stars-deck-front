import React, { useState, useEffect } from "react";
import "../css/tailwind.css";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";

import "../App.scss"



function PageLayout(props) {
  const [useMobile, setUseMobile] = useState()

  useEffect(() => {
    if(window.innerWidth < 600){
      setUseMobile(true)
    } else {
      setUseMobile(false)
    }
  })

  return (
      <div className="w-full md:w-1/4">
        {useMobile ? <TopMenu menuActive={props.menuActive} /> : <SideMenu />}
      </div>
 
  )
}

export default PageLayout;

