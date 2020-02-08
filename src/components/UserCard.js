import React,{useState, useEffect} from "react";
import "../css/tailwind.css";
import axios from "axios";


function UserCard() {
  const [user, setUser] = useState({});

  async function getData(){
    try{
      const res = await axios.get(
        'http://localhost:4444/users', {crossdomain: true}       
        );
      console.log(res);
      setUser(res);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();  
  });  
  return (
    <div className="w-1/5 h-32 bg-warn">
      <div className="overlay"></div>
    </div>
  )
}

export default UserCard;

