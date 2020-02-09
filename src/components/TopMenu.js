import React from "react";
import "../css/tailwind.css";



function TopMenu() {
  return (
    <div className="bg-gray-200 h-screen w-full pl-10  pt-16">
      <div className="w-full"> 
        <div className="text-4xl text-brand"> Stars Deck</div>
      </div>
      <div className="mt-10 w-full">
        <div className="flex flex-wrap">
          <a href="/" className="w-full mb-5 text-brand">Próximos eventos</a>
          <a href= "/novo-evento" className="w-full mb-5 text-brand">Criar novo evento</a>
          <a href= "/ranking" className="w-full mb-5 text-brand">Ranking</a>
          <a href= "/meu-perfil" className="w-full mb-5 text-brand">Meu Perfil</a>
          <a href= "#" className="w-full mb-5 text-warn">Log Out</a>
        </div>
      </div>
    </div>
  )
}

export default TopMenu;

