import React,{useState, useEffect} from "react";
import "../css/tailwind.css";
import axios from "axios";


function RegisterCard(props) {
  
  return (
    <div className=" bg-gray-200 w-full h-screen flex">
      <div className="md:bg-gray-200 w-full md:w-3/10 m-auto flex p-10 flex-wrap md:shadow">
        <div className="text-center text-4xl text-brand w-full flex md:justify-center "> Stars Deck</div>

        <form className="w-full mt-4">
        <div className="w-full">
          <div className="text-md text-brand w-full"> Nome de Exibição</div> 
          <input label="Github Username" name="login" placeholder="Nome"className="w-full"></input>
        </div>
        <div className="w-full">
          <div className="text-md text-brand w-full mt-4"> Github Username</div> 
          <input label="Github Username" name="login" placeholder="Username"className="w-full"></input>
        </div>
          <div className="w-full">
            <div className="text-md text-brand w-full mt-4"> Senha</div> 
            <input label="password" name="password" placeholder="Senha"className="w-full"></input>
          </div>
          <div className="w-full">
            <div className="text-md text-brand w-full mt-4"> Confirmar Senha</div> 
            <input label="password" name="password" placeholder="Senha"className="w-full"></input>
          </div>
          <div className="w-full flex flex-wrap flex-shrink-0 flex-initial justify-end">
            <button onClick={()=> props.isLogin(true)} href="/eventos" type="submit" className="btn large w-2/6 mt-6 mr-4"> Login</button>
            <button href="/eventos" type="submit" className="btn large w-2/6 mt-6"> Registrar</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default RegisterCard;

