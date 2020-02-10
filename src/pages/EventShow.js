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
      <div className=" w-19/20 md:w-3/4 pl-8 md:pl-20 mt-24 md:mt-16 md:pr-32">
        <div className="w-full flex justify-between flex-wrap mt-8">
          <div className="w-13/18 text-4xl text-brand">{event.title}</div>
          <div className="w-full md:w-1/5 text-2xl md:text-4xl text-brand">{event.ocurring_date}</div>
          <div className="w-full mt-4 text-1xl text-gray-700">
            {event.description}
          </div>
        </div>
        <div className="w-full mt-8 flex flex-wrap justify-between"></div>
        <div className="w-13/18 text-2xl text-brand">Sobre o Planner</div>
        <div className="w-full flex flex-wrap mt-4">
          <img className="w-full md:w-1/4" src={`${event.author.avatar_url}`} />
          <div className="w-full md:w-2/3 md:pl-10">
            <div className="w-13/18 text-2xl text-brand">
              Nome: <span className="text-gray-700"> {event.author.name}</span>
            </div>
            <div className="w-full md:w-13/18 text-2xl text-brand">
              Github user: <span className="text-gray-700"> {event.author.github_username} </span>
            </div>
            <div className="w-full md:w-13/18 text-2xl text-brand">
              Bio: <span className="text-gray-700 text-xl"> {event.author.bio}</span>
            </div>
            <div className="w-full md:w-13/18 text-2xl text-brand">
              Pontos: <span className="text-gray-700"> {event.author.points}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventShow;
