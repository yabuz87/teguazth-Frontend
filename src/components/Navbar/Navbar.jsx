import React from 'react';
import './Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import menuIcon from "../../assets/burger.svg"
function Navbar({darkMode, setDarkMode}) {

const op1="dark_back";
const op2="white_back";
  const toggleChange = () => { setDarkMode(!darkMode); };

  return (
    <div className="menu" id={darkMode ? op1 : op2} >
      <img src="" alt="Logo here" />
      <ul className="menu-options">
        <li>Login</li>
        <li>About us</li>
        <li>something</li>
      </ul>
      <div className="right-head">
        <i className="bi bi-moon dark-icon" onClick={toggleChange}>
        </i>
        <i className="bi bi-globe"></i>
      </div>
      {/* <i className="bi bi-menu-button menu-open-icon"></i> */}
      <img className="menu-open-icon" src={menuIcon}/>
      
    </div>
  );
}

export default Navbar;
