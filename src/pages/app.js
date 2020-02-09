import React, { useState } from "react";
import LoginCard from "../components/LoginCard";
import "../styles/App.scss";
import RegisterCard from "../components/RegisterCard";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full h-screen font-family flex flex-wrap justify-center align-middle">
      {isLogin ? (
        <LoginCard isLogin={setIsLogin} />
      ) : (
        <RegisterCard isLogin={setIsLogin} />
      )}
    </div>
  );
}

export default App;
