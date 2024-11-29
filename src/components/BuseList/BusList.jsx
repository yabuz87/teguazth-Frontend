import React, { useContext } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import { busObj } from "../../assets/availableList.js";
import { AppContext } from '../Context.jsx';
import "./BusList.css";
const BusList = () => {
  const navigate=useNavigate();
  const { init, timeD, destination, setBusId } = useContext(AppContext);
function nextHandler(){
  
  navigate("/fill");
}
function backHandler()
{
  navigate("/");
}
  function handleBusId(e) {
    setBusId(e);
  }
  function callTwoFunctions(e) {
    handleBusId(e);
    nextHandler();
  }

  return (
    <div className="available-bus">
      <div>
        <h1>Available Buses</h1>
        <div className="available-container">
          {busObj.map((bus, index) => (
            <div key={index} className="available-bus-card" onClick={() => callTwoFunctions(bus.Id)}>
              <div className="busImg-div"><img src={bus.img} alt={`${bus.name}`} /></div>
              <div className="discription">
                <p>Name: <span className="detail-span">{bus.name}</span></p>
                <p>Departure: <span className="detail-span">{init}</span></p>
                <p>Destination: <span className="detail-span">{destination}</span></p>
                <p>Date:<span className="detail-span">{timeD}</span></p>
              </div>
            </div>
          ))}
        </div>
        <div className="NavigationButton">
          <button className="prev-btn" onClick={backHandler}><i className="bi bi-arrow-left-short"></i>Back</button>
        </div>
      </div>
    </div>
  );
}

export default BusList;
