import React from "react";
import "./Header.css";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom"; 

const Header = (props) => {
  const history = useHistory(); 

  const kickOff = () => {
    Cookies.remove("JWT");
    history.push("/Login"); 
  };

  return (
    <div className="Header">
      <h1>Header</h1>
      <button onClick={kickOff}>Logout</button>
    </div>
  );
};

export default Header;
