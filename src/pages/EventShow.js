import React from "react";
import "../styles/App.scss";
import PageLayout from "../components/PageLayout";
import useApiRequest from "../services/hooks";
import { useParams } from "react-router-dom";

function EventShow(props) {
  const { id } = useParams();
  const [{ data: event, isLoading }] = useApiRequest(`/events/${id}`, null);
  if (isLoading || !event) {
    return null;
  }
  console.log({ event, isLoading });

  return (
    <div className="w-full h-screen font-family flex flex-wrap">
      <PageLayout />
      <div className="w-3/4 pl-20 mt-16 pr-32">
        <div className="w-full flex justify-between flex-wrap mt-8">
          <div className="w-13/18 text-4xl text-brand">{event.title}</div>
          <div className="w-1/5 text-4xl text-brand">{event.ocurring_date}</div>
          <div className="w-full mt-4 text-1xl text-gray-700">
            {event.description}
          </div>
        </div>
        <div className="w-full mt-8 flex flex-wrap justify-between"></div>
        <div className="w-13/18 text-2xl text-brand">Sobre o Planner</div>
        <div className="w-full flex flex-wrap">
          <img className="w-1/3" src={`${event.author.avatar_url}`} />
          <div className="w-2/3 pl-10">
            <div className="w-13/18 text-2xl text-brand">
              Nome: {event.author.github_username}
            </div>
            <div className="w-13/18 text-2xl text-brand">
              Nome: {event.author.bio}
            </div>
            <div className="w-13/18 text-2xl text-brand">
              Nome: {event.author.points}
            </div>
            <div className="w-13/18 text-2xl text-brand">
              Nome: {event.author.events}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventShow;
