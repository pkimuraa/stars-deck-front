import React from "react";
import "../css/tailwind.css";
import SideMenu from "../components/SideMenu";
import UserCard from "../components/UserCard";
import "../App.scss"



function Ranking() {
  return (
    <div className="w-full h-screen font-family flex flex-wrap">
      <div className="w-1/4">
        <SideMenu />
      </div>
      <div className="w-3/4 pl-20 mt-16 pr-32">
      </div>
    </div>
  )
}

export default Ranking;

