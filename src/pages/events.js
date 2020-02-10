import React, { useEffect } from "react";
import SideMenu from "../components/SideMenu";
import ActionBar from "../components/ActionBar";
import UserCard from "../components/UserCard";
import EventCard from "../components/EventCard";
import "../styles/App.scss";
import PageLayout from "../components/PageLayout";
import useApiRequest from "../services/hooks";
import { Link } from "react-router-dom";

function Events(props) {
  const [{ data: events, isLoading }, refetch] = useApiRequest("/events", []);

  console.log({ events, isLoading });

  return (
    <div className="w-full h-screen font-family flex flex-wrap">
      <PageLayout />
      <div className=" w-19/20 md:w-3/4 pl-8 md:pl-20 mt-32 md:mt-16 md:pr-32">
        <ActionBar />
        <div className="w-full mt-8">
          <div className="w-full text-4xl text-brand"> Próximos eventos</div>
        </div>
        <div className="w-full mt-4 flex flex-wrap justify-between">
          {isLoading && "loading..."}
          {!isLoading &&
            events.map(e => (
              <Link
                to={`/eventos/${e._id}`}
                className="w-full md:w-9/20 bg-gray-200 flex mb-10 p-4 pt-10 pb-10 shadow"
              >
                <EventCard
                  participants={e.participants}
                  title={e.title}
                  date={e.ocurring_date}
                  description={e.description}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
