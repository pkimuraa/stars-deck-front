import React from "react";

function EventCard(props) {
  function parseDate(date) {
    return date.replace("/", ".").substring(0, 5);
  }
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-1/4 text-4xl text-brand">{parseDate(props.date)}</div>
      <div className="w-3/4 pl-4 flex flex-wrap">
        <div className="w-full text-2xl text-brand">{props.title}</div>
        <div className="w-full text-md text-brand">{props.description}</div>
      </div>
    </div>
  );
}

export default EventCard;
