import React, { useEffect } from "react";
import SideMenu from "../components/SideMenu";
import UserCard from "../components/UserCard";
import "../styles/App.scss";
import PageLayout from "../components/PageLayout";

function Ranking(props) {
  return (
    <div className="w-full h-screen font-family flex flex-wrap">
      <PageLayout />
      <div className="w-3/4 pl-20 mt-16 pr-32"></div>
    </div>
  );
}

export default Ranking;
