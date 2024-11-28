import React, { useContext } from 'react';
import { AppContext } from '../Context';
//import { useNavigate } from 'react-router-dom';
import { busObj } from '../../assets/availableList.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Fermatas } from "../../assets/fermatas"; // Ensure correct import
import './FillForm.css';

const FillForm = () => {
  //const navigate=useNavigate();
  // function handleNavigate()
  // {
  //   navigate("/avail");
  // }
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
          
        </div>
      ) : (
        <p>No bus selected</p>
      )}
      <div className="right-side">
      <h1>Form</h1>
      <div><p>Departure Time: {timeD}</p>
          <p>Destination: {destination}</p>
          <p>Bus ID: {busId}</p></div>
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
        <button className="submit-btn">Submit</button>
      </div>
      <div className="back-navigation">
       <button className="back-btn"><i className="bi bi-arrow-left-short"></i>Back</button>
      </div>
    </div>
  );
};

export default FillForm;
