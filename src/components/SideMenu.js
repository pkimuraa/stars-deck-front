import React from "react";
import "../css/tailwind.css";


function SideMenu() {
  return (
    <div className="bg-gray-200 h-screen w-full pl-10  pt-16">
      <div className="side-menu__header w-full"> 
        <div className="text-4xl text-brand"> Stars Deck</div>
      </div>
      <div className="mt-10 w-full">
        <ul className="flex flex-wrap">
          <a href= "#" className="w-full mb-5 text-brand">Nossos devs</a>
          <a href= "#" className="w-full mb-5 text-brand">Próximos eventos</a>
          <a href= "#" className="w-full mb-5 text-brand">Criar novo evento</a>
          <a href= "#" className="w-full mb-5 text-brand">Meus pontos</a>
          <a href= "#" className="w-full mb-5 text-warn">Log Out</a>
        </ul>
      </div>
    </div>
  )
}

export default SideMenu;

