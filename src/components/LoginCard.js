import React, { useState, useEffect } from "react";

function LoginCard(props) {
  return (
    <div className=" bg-gray-200 w-full h-screen flex">
      <div className="md:bg-gray-200 w-full md:w-3/10 m-auto flex p-10 flex-wrap md:shadow">
        <div className="md:text-center text-4xl text-brand w-full flex md:justify-center ">
          {" "}
          Stars Deck
        </div>
        <div
          onClick={() => props.isLogin(false)}
          className=" text-sm md:text-md text-brand w-full mt-4 cursor-pointer"
        >
          {" "}
          Ainda não tem cadastro?{" "}
          <span className="underline">Cadastre-se aqui</span>
        </div>
        <form className="w-full mt-4">
          <div className="w-full">
            <div className="text-md text-brand w-full"> Github Username</div>
            <input
              label="Github Username"
              name="login"
              placeholder="Username"
              className="w-full"
            ></input>
          </div>
          <div className="w-full">
            <div className="text-md text-brand w-full mt-4"> Senha</div>
            <input
              label="password"
              name="password"
              placeholder="Senha"
              className="w-full"
            ></input>
          </div>
          <div className="w-full flex flex-wrap flex-shrink-0 flex-initial justify-end">
            <button
              href="/eventos"
              type="submit"
              className="btn large w-3/6 mt-6"
            >
              {" "}
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginCard;
