import React, { useEffect } from "react";
import "../css/tailwind.css";
import SideMenu from "../components/SideMenu";
import ActionBar from "../components/ActionBar";
import UserCard from "../components/UserCard";
import "../App.scss"
import PageLayout from '../components/PageLayout';


function Events(props) {

  useEffect(() => {
    props.setMenuActive(1);
  })

  return (
    <div className="w-full h-screen font-family flex flex-wrap">
      <PageLayout menuActive={props.menuActive} />
      <div className="w-3/4 pl-20 mt-16 pr-32">
        <ActionBar />
        <div className="w-full mt-8">
            <div className="w-full text-4xl text-brand"> Próximos eventos</div>
        </div>
        <div className="w-full mt-4 flex flex-wrap justify-between">
          <UserCard />
        </div>
      </div>
    </div>
  )
}

export default Events;
