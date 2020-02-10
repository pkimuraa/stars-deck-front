import React, { useState, useEffect } from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";

import "../styles/App.scss";

function PageLayout(props) {


  return (
    <div className="w-full md:w-1/4">
      <TopMenu />  
      <SideMenu />
    </div>
  );
}

export default PageLayout;
