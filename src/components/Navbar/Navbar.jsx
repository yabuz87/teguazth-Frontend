import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect } from 'react';
import menuIcon from "../../assets/burger.svg";
import './Navbar.css';

function Navbar({ darkMode, setDarkMode }) {
  const [menuPosition, setMenuPos] = useState('-320px');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {  // Adjust based on your breakpoint for desktop
        setMenuPos('-320px');  // Reset the menu state
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div className={`menu ${darkMode ? op1 : op2} menu-container`}>
      <img src="" alt="Logo here" />
      <ul className={`menu-options ${darkMode ? op1 : op2}`} style={{ right: menuPosition }}>
        <li>Login</li>
        <li>Other Apps & Webs</li>
        <li>About us</li>
        <li>Blogs</li>
      </ul>
      <div className="right-head" style={{ right: menuPosition }}>
        <i className="bi bi-moon dark-icon" onClick={toggleChange}></i>
        <i className="bi bi-globe"></i>
      </div>
      {menuPosition === '0px' && (
        <i className="bi bi-x menu-close-icon" onClick={closeMenu}></i>
      )}
      {menuPosition !== '0px' && (
        <i className={`bi bi-list menu-open-icon ${darkMode ? op1 : op2}`} onClick={openMenu}></i>
      )}
    </div>
  );
}

export default Navbar;
