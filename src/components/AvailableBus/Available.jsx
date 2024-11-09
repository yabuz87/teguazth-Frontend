import React, { useContext } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { busObj } from "../../assets/availableList.js";
import { AppContext } from '../Context';
import "./AvailableBus.css";
import { useNavigate } from 'react-router-dom';

const Available = () => {
  const navigate = useNavigate();
  const { init, timeD, destination, setBusId } = useContext(AppContext);

  function handleBusId(e) {
    setBusId(e);
  }

  function handleNextPage() {
    navigate("/fillForm");
  }

  function handleBackpage() {
    navigate("/");
  }

  function callTwoFunctions(e) {
    handleBusId(e);
    handleNextPage();
  }

  return (
    <div className="available-bus">
      <div>
        <h1>Available Buses</h1>
        <div className="available-container">
          {busObj.map((bus, index) => (
            <div key={index} className="available-bus-card" onClick={() => callTwoFunctions(bus.Id)}>
              <div className="busImg-div"><img src={bus.img} alt={`${bus.name}`} /></div>
              <div>
                <p>Name: {bus.name}</p>
                <p>Plate Number: {bus.plate_no}</p>
                <p>Location: {init}</p>
                <p>Destination: {destination}</p>
                <p>Date: {timeD}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="NavigationButton">
          <button className="prev-btn" onClick={handleBackpage}><i className="bi bi-arrow-left-short"></i>Previous</button>
        </div>
      </div>
    </div>
  );
}

export default Available;
