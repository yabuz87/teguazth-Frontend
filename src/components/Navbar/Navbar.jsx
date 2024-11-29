import './Navbar.css';
import React,{ useRef, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import menuIcon from "../../assets/burger.svg"
function Navbar({darkMode, setDarkMode}) {
  const [menu, setMenu] = useState("home");
  const menuRef=useRef()
  const openMenu=()=>
    {
      
      menuRef.current.style.right="0";
      console.log("hello you Guy");
    }
    const closeMenu=()=>
    {
    
      menuRef.current.style.right="-320px";

    }

const op1="dark_back";
const op2="white_back";
  const toggleChange = () => { setDarkMode(!darkMode); };

  return (
    <div className="menu" id={darkMode ? op1 : op2} >
      <img src="" alt="Logo here" />
      <ul ref={menuRef} className="menu-options">
        <li>Login</li>
        <li>About us</li>
        <li>something</li>
      </ul>
      <div className="right-head">
        <i className="bi bi-moon dark-icon" onClick={toggleChange}>
        </i>
        <i className="bi bi-globe"></i>
      </div>
      <i className="bi bi-x menu-close-icon"  onClick={closeMenu()}></i>
      <img className="menu-open-icon" onClick={openMenu()} src={menuIcon}/>

    </div>
  );
}

export default Navbar;
