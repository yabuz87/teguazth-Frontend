import React, { useContext } from 'react';
import { AppContext } from '../Context';
import { busObj } from '../../assets/availableList.js';
import { Fermatas } from "../../assets/fermatas"; // Ensure correct import
import './FillForm.css';

const FillForm = () => {
  const {init, timeD, destination, busId } = useContext(AppContext);

  // Find the selected bus based on busId
  const selectedBus = busObj.find(item => busId === item.Id);

  return (
    <div className="FillForm-container">
      {selectedBus ? (
        <div  className="left-side" key={selectedBus.Id}>
          <h1>{selectedBus.name}</h1>
          <p><span>Hi there,</span> Welcome to {selectedBus.name}! We are thrilled to have you onboard. We aim to provide you with everything you desire and deserve during your journey, including free Wi-Fi, breakfast, entertainment, and safe sites. All these amenities are available for just 750 ETB. Your safety and happiness are our top priorities.</p>
          <img src={selectedBus.img} alt={selectedBus.name} />
          <p>Departure Time: {timeD}</p>
          <p>Destination: {destination}</p>
          <p>Bus ID: {busId}</p>
        </div>
      ) : (
        <p>No bus selected</p>
      )}
      <div className="right-side">
        <label>Full Name:</label>
        <input type="text" placeholder="e.g. abc cde" />

        <label>Number of Passengers:</label>
        <input type="number" />

        
        <select>
        <option>select Fermata</option>
          {Fermatas(init).map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FillForm;
