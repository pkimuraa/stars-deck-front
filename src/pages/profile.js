import React, { useEffect } from "react";
import "../css/tailwind.css";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import UserCard from "../components/UserCard";
import "../App.scss"
import PageLayout from '../components/PageLayout';


function Profile(props) {

  useEffect(() => {
    props.setMenuActive(4);
  })

  return (
    <div className="w-full h-screen font-family flex flex-wrap">
      <PageLayout menuActive={props.menuActive} />      
      <div className="w-3/4 pl-20 mt-16 pr-32">
      </div>
   </div>
  )
}

export default Profile;

