import React from 'react';
import './Navbar.css';
import {useState} from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
const Navbar = () => {

  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => { setDarkMode(!darkMode)};
  
  return (
    <div className="menu">
      <img src="" alt="Logo here" />
      <ul>
        <li>Login</li>
        <li>About us</li>
        <li>something</li>
      </ul>
      <div className="right-head">
      <i  className="bi bi-moon" onClick={toggleTheme}></i>
      <i className="bi bi-globe"></i>
      </div>
    </div>
  );
};

export default Navbar;
