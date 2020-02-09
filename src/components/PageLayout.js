import React, { useState, useEffect } from "react";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";

import "../styles/App.scss";

function PageLayout(props) {
  const [useMobile, setUseMobile] = useState();

  useEffect(() => {
    if (window.innerWidth < 600) {
      setUseMobile(true);
    } else {
      setUseMobile(false);
    }
  }, []);

  return (
    <div className="w-full md:w-1/4">
      {useMobile ? <TopMenu /> : <SideMenu />}
    </div>
  );
}

export default PageLayout;
