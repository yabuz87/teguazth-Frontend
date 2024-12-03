import React, { useContext,useState} from 'react';
import { AppContext, AppProvider } from '../Context.jsx';
import { useNavigate } from 'react-router-dom';
import {city} from '../../assets/city.js';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import busImage from "../../assets/busimg.jpg";
import {pay} from "../../assets/paymentImage.js";
import  Carousel from "../Partner/Carousel";
const Home = () => {
  const navigate=useNavigate();
  
  const {init,setInit,timeD,setTime,destination,setDestination}=useContext(AppContext);
  function handleNavigate()
  {
    if(init==="" || timeD==="" || destination==="")
    {
      alert("please fill  all !");

    }
    else {navigate("/avail");}
    
  }
  const handleInit = (e) => {
    setInit(e.target.value);
  };

  const handletime = (e) => {
    setTime(e.target.value);
  };

  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  return (
    <>
    <div className="main-container">
      <div className="form-input">
        <h1>Book Now!</h1>

        <div className="container">
          <div className="left-side">
            <div>from</div>
            <div>
            <select onChange={(e)=>handleInit(e)}>
              <option value="">Select city</option> {/* Add value attribute to option */}
              {city.map((item, index) => (
                <option key={index} value={item.name}>{item.name}</option>
              ))}
            </select>
            </div>
          </div>
          <div className="right-side">
            <div>to</div>
            <div>
            <select onChange={(e)=>handleDestination(e)}>
              <option value="">Select city</option> {/* Add value attribute to option */}
              {city.map((item, index) => (
                <option key={index} value={item.name}>{item.name}</option>
              ))}
            </select>
            </div>
          </div>
          <div className="date-departure">
            <label> Departure Date:</label>
            <input type="date" value={timeD} onChange={(e)=>handletime(e)}></input>
          </div>
        </div>

        <div className="info-from-selection">
          <div className="selected-places">
            <label>Location:</label>
            <input type="text" value={init} onChange={(e)=>handleInit(e)} placeholder="Location" />
          </div>
          <div className="selected-places">
            <label>Destination:</label>
            <input type="text" value={destination} onChange={(e)=>handleDestination(e)} placeholder="Destination" />
          </div>
          <div className="selected-places">
            <label>Time appointed:</label>
            <input type="date" onChange={(e)=>handletime(e)} value={timeD}/>
          </div>
        </div>

        <button className="next-btn" onClick={handleNavigate}>
          Next <i className="bi bi-arrow-right-short"></i>
        </button>
      </div>
      <div className="right-section">
        {/* <h1>this is the right section</h1> */}
        <h1>Ticketing website</h1>
        <p>Our ticketing website makes booking your bus journey a breeze! With seamless payment options and destinations across the map, your next trip is just a click away. Book now and travel with ease! 🌍✨</p>
        </div>
    </div>
    <div>
    <Carousel/>
      
      <div className="">
      <h1>Multiple Payment Options</h1>
      <div className="payment-method-container">
        {
          pay.map((item,index)=>
          {
            return(
              <div className="payment-card" key={index}>
              <img src={item.img}></img>
              </div>
            )})
        }
      </div>
      </div>
    </div>
    </>
  );
};

export default Home;
