import React, { useState } from "react";
import "../styles/App.scss";
import PageLayout from "../components/PageLayout";
import api from "../services/api";
import useApiRequest from "../services/hooks";

function NewEvent(props) {
  const [title, setTitle] = useState();
  const [ocurringDate, setOcurringDate] = useState();
  const [description, setDescription] = useState();
  const [type, setType] = useState();
  const [user, setUser] = useState();
  const [{ data: users, isLoading: usersLoading }] = useApiRequest(
    "/users",
    []
  );
  const [{ data: eventType, isLoading }] = useApiRequest("/event/type", []);
  if (eventType.length === 0) {
    return null;
  }
  async function onSubmit(e) {
    e.preventDefault();
    console.log({ title, ocurringDate, description, type });
    await api.post("/events", {
      title,
      ocurring_date: ocurringDate,
      description,
      eventTypeId: type,
      userId: user
    });
  }

  return (
    <div className="w-full h-screen font-family flex flex-wrap">
      <PageLayout />
      <div className=" w-19/20 md:w-3/4 pl-4 md:pl-20 mt-24 md:mt-16 md:pr-32">
        <div className="w-full flex justify-between flex-wrap mt-8">
          <div className="w-full md:w-13/18 text-4xl text-brand">
            Qual será seu próximo evento?
          </div>
        </div>
        <form onSubmit={onSubmit} className="w-full flex flex-wrap justify-between mt-4">
          <div className="w-full md:w-5/10 mb-2">
            <div className="w-full mb-2">Nome do Evento</div>
            <input
              className="w-full"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            ></input>
          </div>
          <div className=" w-full md:w-5/10  mb-2">
            <div className="w-full mb-2">Quando vai acontecer?</div>
            <input
              className="w-full"
              placeholder="dd/mm/aaaa"
              type="text"
              value={ocurringDate}
              onChange={e => setOcurringDate(e.target.value)}
            ></input>
          </div>
          <div className=" w-full md:w-5/10  mb-2">
          <div className="w-full mb-2">Qual tipo do evento?</div>
            <select 
              className="large w-full"
              type="text"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option selected="selected">Escolha uma das opções</option>
              {eventType.map(e => (
                <option value={e._id}>{e.title}</option>
              ))}
            </select>
          </div>
          <div className=" w-full md:w-5/10  mb-2">
            <div className="w-full mb-2">Responsável:</div>
              <select
                className="w-full large"
                type="text"
                value={user}
                onChange={e => setUser(e.target.value)}
              >
                <option selected="selected">escolhe</option>
                {users.map(u => (
                  <option value={u._id}>{u.github_username}</option>
                ))}
              </select>
          </div>
          <div className=" w-full md:w-5/10  mb-2">
            <div className="w-full mb-2">Fale um pouco mais!</div>
              <input
                className="w-full"
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></input>
            </div>
            <div className="w-full">
              <button type="submit" className="btn w-full md:w-3/8 mt-4 mb-10 md:mb-0">
                Criar!
              </button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default NewEvent;
