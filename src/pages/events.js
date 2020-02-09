import React, { useEffect } from "react";
import SideMenu from "../components/SideMenu";
import ActionBar from "../components/ActionBar";
import UserCard from "../components/UserCard";
import "../styles/App.scss";
import PageLayout from "../components/PageLayout";
import useApiRequest from "../services/hooks";

function Events(props) {
  const [{ data: events, isLoading }, refetch] = useApiRequest("/events", []);

  console.log({ events, isLoading });

  return (
    <div className="w-full h-screen font-family flex flex-wrap">
      <PageLayout />
      <div className="w-3/4 pl-20 mt-16 pr-32">
        <ActionBar />
        <div className="w-full mt-8">
          <div className="w-full text-4xl text-brand"> Próximos eventos</div>
        </div>
        <div className="w-full mt-4 flex flex-wrap justify-between">
      {/*     {isLoading && "loading..."}
          {!isLoading &&
            events.map(e => (
              <EventCard participants={e.participants} title={e.title} />
            ))} */}
        </div>
      </div>
    </div>
  );
}

export default Events;
