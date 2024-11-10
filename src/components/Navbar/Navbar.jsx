import React from 'react';
import './Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Navbar({darkMode, setDarkMode}) {

const op1="dark_back";
const op2="white_back";
  const toggleChange = () => { setDarkMode(!darkMode); };

  return (
    <div className="menu" id={darkMode ? op1 : op2} >
      <img src="" alt="Logo here" />
      <ul>
        <li>Login</li>
        <li>About us</li>
        <li>something</li>
      </ul>
      <div className="right-head">
        <i className="bi bi-moon dark-icon" onClick={toggleChange}>
        </i>
        <i className="bi bi-globe"></i>
      </div>
    </div>
  );
}

export default Navbar;
