import React from "react";
import { Link } from "react-router-dom";
import eventsAltIcon from "../images/icons/events-alt-icon.svg";
import addAltIcon from "../images/icons/add-alt-icon.svg";
import rankingAltIcon from "../images/icons/ranking-alt-icon.svg";
import profileAltIcon from "../images/icons/profile-alt-icon.svg";

function TopMenu(props) {
  return (
    <div className="bg-gray-200 shadow w-full pt-4 fixed md:hidden">
      <div className="w-full">
        <div className="text-xl text-brand pl-5"> Stars Deck</div>
      </div>
      <div className="mt-2 w-full">
        <div className="flex flex-wrap justify-between">
          <div className="w-1/4 flex flex-wrap">
            <div className="flex justify-center w-full">
              <Link to="/proximos-eventos">
              <img
                src={eventsAltIcon}
                alt="proximos eventos"
                className="pb-1"
              />
              </Link>
            </div>
          </div>
          <div className="w-1/4 flex flex-wrap ">
            <div className="flex justify-center w-full">
            <Link to="/novo-evento">
              <img src={addAltIcon} alt="proximos eventos" className="pb-1" />
            </Link>
            </div>
          </div>
          <div className="w-1/4 flex flex-wrap ">
            <div className="flex justify-center w-full">
            <Link to="/ranking">
              <img
                src={rankingAltIcon}
                alt="proximos eventos"
                className="pb-1"
              />
            </Link>
            </div>
          </div>
          <div className="w-1/4 flex flex-wrap ">
            <div className="flex justify-center w-full">
              <Link to="/meu-perfil">
              <img
                src={profileAltIcon}
                alt="proximos eventos"
                className="pb-1"
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
