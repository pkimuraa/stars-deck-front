import React from "react";
import eventsIcon from "../images/icons/events-icon.svg";
import addIcon from "../images/icons/add-icon.svg";
import rankingIcon from "../images/icons/ranking-icon.svg";
import profileIcon from "../images/icons/profile-icon.svg";
import eventsAltIcon from "../images/icons/events-alt-icon.svg";
import addAltIcon from "../images/icons/add-alt-icon.svg";
import rankingAltIcon from "../images/icons/ranking-alt-icon.svg";
import profileAltIcon from "../images/icons/profile-alt-icon.svg";

function TopMenu(props) {
  return (
    <div className="bg-gray-200 shadow w-full pt-4">
      <div className="w-full">
        <div className="text-xl text-brand pl-5"> Stars Deck</div>
      </div>
      <div className="mt-2 w-full">
        <div className="flex flex-wrap justify-between">
          <div className="w-1/4 flex flex-wrap">
            <div className="flex justify-center w-full">
              <img
                src={eventsAltIcon}
                alt="proximos eventos"
                className="pb-1"
              />
            </div>
          </div>
          <div className="w-1/4 flex flex-wrap ">
            <div className="flex justify-center w-full">
              <img src={addAltIcon} alt="proximos eventos" className="pb-1" />
            </div>
          </div>
          <div className="w-1/4 flex flex-wrap ">
            <div className="flex justify-center w-full">
              <img
                src={rankingAltIcon}
                alt="proximos eventos"
                className="pb-1"
              />
            </div>
          </div>
          <div className="w-1/4 flex flex-wrap ">
            <div className="flex justify-center w-full">
              <img
                src={profileAltIcon}
                alt="proximos eventos"
                className="pb-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
