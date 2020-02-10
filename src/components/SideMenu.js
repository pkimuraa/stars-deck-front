import React from "react";
import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <div className="bg-gray-200 h-screen w-full pl-10 hidden pt-16 md:block">
      <div className="side-menu__header w-full">
        <div className="text-4xl text-brand"> Stars Deck</div>
      </div>
      <div className="mt-10 w-full">
        <div className="flex flex-wrap">
          <Link to="/proximos-eventos" className="w-full mb-5 text-brand">
            {" "}
            Próximos eventos{" "}
          </Link>
          <Link to="/novo-evento" className="w-full mb-5 text-brand">
            {" "}
            Criar novo evento{" "}
          </Link>
          <Link to="/ranking" className="w-full mb-5 text-brand">
            {" "}
            Ranking{" "}
          </Link>
          <Link to="/meu-perfil" className="w-full mb-5 text-brand">
            {" "}
            Meu Perfil{" "}
          </Link>
          <Link to="/" className="w-full mb-5 text-warn">
            {" "}
            Log Out{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
