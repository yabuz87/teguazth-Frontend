import React, { useContext,useState,useEffect} from 'react';
import { AppContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import { busObj } from '../../assets/availableList.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "../footer/Footer.jsx"
import { Fermatas } from "../../assets/fermatas"; // Ensure correct import
import './FillForm.css';

const FillForm = () => {
  const navigate=useNavigate();
  function backHandler()
  {
    navigate("/avail");
  }
  const {init, timeD, destination, busId} = useContext(AppContext);

  const [fullName,setFullName]=useState();
  const [timeOfDepatrue,setTimeOfDep]=useState();
  const [phone,setPhone]=useState();
  const [sBus,setSeletcedBus]=useState();
  
  const [Fermata,setFermata]=useState();




const selectedBus=busObj.map(item=>busId===item.id);
  return (
    <div className="page-container">
      <div className="FillForm-container">
    <div className="right-section">

      <div>
          <p>Bus Name:  <span className="bus-name">{ selectedBus===null ? "no Bus" :selectedBus.name}</span></p>
          <p>Departure Time: {timeD}</p>
          <p>Destination: {destination}</p>
          <p>Bus Id: {busId}</p>
      </div>
        <div><label>Full Name:</label>
        <input type="text" placeholder="e.g. abc cde"/>
        </div>
       <div> <label>Phone Number:</label>
       <input type="text"></input>
       </div>
        <div>
        <label>time of Depature</label>
        <select>
          <option value="1">select time</option>
          <option value="2">Morning 12:30 LT</option>
          <option value="3">Morning  4:30 LT</option>
          <option value="4">Mid Day  6:00 LT</option>
        </select>
        </div>
        <div>
        <label>Special Requests:</label>
        <input type="text"/>
        </div>
        <div>
        <label>Fermata:</label>
        <select>
        <option>select Fermata</option>
          {Fermatas(init).map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
        </div>
      </div>
      {selectedBus ? (
        <div  className="left-side" key={selectedBus.Id}>
          <h1>{selectedBus.name}</h1>
          <p><span>Hi there,</span> Welcome to {selectedBus.name}! We are thrilled to have you onboard. We aim to provide you with everything you desire and deserve during your journey, including free Wi-Fi, breakfast, entertainment, and safe sites. All these amenities are available for just 750 ETB. Your safety and happiness are our top priorities.</p>
          <img src={selectedBus.img} alt={selectedBus.name} />
          
        </div>
      ) : (
        <p>No bus selected</p>
      )}
      
      <div className="back-navigation">
       <button className="back-btn" onClick={backHandler}><i className="bi bi-arrow-left-short"></i>Back</button>
       <button className="submit-btn">Submit</button>
      </div>
    </div>
    <div  className="pay-option">
      <h1>Payment Options</h1>
      <div className="img-container">
          {}
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default FillForm;
