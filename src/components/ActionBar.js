import React from "react";

function ActionBar() {
  return (
    <div className="w-full flex justify-between align-middle">
      <div className="w-5/18 flex">
        <form className="w-full flex">
          <input placeholder="Hello World" className="7/10 mr-4"></input>
          <button className="1/5 btn"> Pesquisar</button>
        </form>
      </div>
      <div className="w-1/4 flex">
        <button className="w-full btn"> Criar novo evento</button>
      </div>
    </div>
  );
}

export default ActionBar;
