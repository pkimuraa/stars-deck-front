import React, {useState} from "react";
import "../css/tailwind.css";
import LoginCard from "../components/LoginCard";
import "../App.scss"
import RegisterCard from "../components/RegisterCard";



function App() {
  const [isLogin, setIsLogin] = useState(true)
  
  return (
    <div className="w-full h-screen font-family flex flex-wrap justify-center align-middle">
      {isLogin ? <LoginCard isLogin={setIsLogin}/> : <RegisterCard isLogin={setIsLogin} />}
    </div>
  )
}

export default App;
