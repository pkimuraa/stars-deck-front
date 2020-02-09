import React, { useEffect } from "react";
import "../css/tailwind.css";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import UserCard from "../components/UserCard";
import "../App.scss"



function Profile(props) {

  useEffect(() => {
    props.setMenuActive(4);
  })

  return (
    <div className="w-full h-screen font-family flex flex-wrap">
      <div className=" w-full md:w-1/4">
        <TopMenu menuActive={props.menuActive}/>
      </div>
      <div className="w-3/4 pl-20 mt-16 pr-32">
      </div>
    </div>
  )
}

export default Profile;

