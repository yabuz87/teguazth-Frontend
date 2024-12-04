import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import menuIcon from "../../assets/burger.svg";
import './Navbar.css';

function Navbar({ darkMode, setDarkMode }) {
  const [menuPosition, setMenuPos] = useState('-320px');

  const openMenu = () => {
    setMenuPos('0px');
  };

  const closeMenu = () => {
    setMenuPos('-200px');
  };

  const toggleChange = () => {
    setDarkMode(!darkMode);
  };

  const op1 = 'dark_back';
  const op2 = 'white_back';

  return (
    <div className={`menu ${darkMode ? op1 : op2}`}>
      <img src="" alt="Logo here" />
      <ul className="menu-options" style={{ right: menuPosition }}>
        <li>Login</li>
        <li>Other Apps & Webs</li>
        <li>About us</li>
        <li>Blogs</li>
      </ul>
      <div  className="right-head" style={{ right: menuPosition }}>
        <i className="bi bi-moon dark-icon" onClick={toggleChange}></i>
        <i className="bi bi-globe"></i>
      </div>
      {menuPosition === '0px' && (
        <i className="bi bi-x menu-close-icon" onClick={closeMenu}></i>
      )}
      {menuPosition !== '0px' && (
        <img className="menu-open-icon" onClick={openMenu} src={menuIcon} alt="Menu Icon" />
      )}
    </div>
  );
}

export default Navbar;
