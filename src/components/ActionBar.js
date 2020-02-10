import React from "react";

function ActionBar() {
  return (
    <div className="w-full flex justify-between align-middle flex-wrap">
      <div className=" w-full md:w-5/18 flex flex-wrap ">
        <form className="w-full flex  md:flex-no-wrap flex-wrap justify-between md:justify-start mb-10 md:mb-0">
          <input placeholder="Hello World" className="w-4/6 md:w-7/10 md:mr-4"></input>
          <button className="1/5 btn"> Pesquisar</button>
        </form>
      </div>
      <div className="w-full md:w-1/4 flex">
        <button className="w-full btn"> Criar novo evento</button>
      </div>
    </div>
  );
}

export default ActionBar;
