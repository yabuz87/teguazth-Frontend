import React, { useContext,useState,useEffect} from 'react';
import { AppContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import { busObj } from '../../assets/availableList.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "../footer/Footer.jsx"
import { Fermatas } from "../../assets/fermatas"; // Ensure correct import
import {pay} from "../../assets/paymentImage"
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




const selectedBus=busObj.map(item=>busId===item.Id);
  return (
    <div className="page-container">
      <div className="FillForm-container">
    <div className="form-section">
    <div>
    <h1>Booking Form</h1>
    <p>To reserve seats please complete and submit the booking Form</p>
    <hr/>
      
        <div style={{marginLeft:"3px"}}>
        <label style={{display:"block",margin:"5px 0px"}}>Number Of Passenger: </label>
          <input style={{width:"150px"}} type="text"></input>
        </div>
        <div className="name-section">
        <h4>Name</h4>
        <div className="name">
        <div><label style={{display:"block",margin:"5px"}}>First Name:</label>
        <input type="text" placeholder="e.g. abc cde"/>
        </div>
        <div><label style={{display:"block",margin:"5px"}}>Last Name:</label>
        <input type="text" placeholder="e.g. abc cde"/>
        </div>
        </div>
        </div>
       <div> <h4 style={{margin:"10px 0px"}}>Phone Number:</h4>
       <input type="text" style={{width:"300px"}} placeholder='+251'></input>
       </div>
        <div className="departure-info">
        <h4 style={{margin:"10px 0px"}}>Departure Information</h4>
        <div className="time-and-pickup">
        <div>
        <label style={{display:"block",margin:"5px"}}>Depature Time: </label>
        <select>
          <option value="1">select time</option>
          <option value="2">Morning 12:30 LT</option>
          <option value="3">Morning  4:30 LT</option>
          <option value="4">Mid Day  6:00 LT</option>
        </select>
        </div>
        <div>
        <label style={{display:"block",margin:"5px"}}>pickup Adress:</label>
        <select>
        <option>select Fermata</option>
          { Fermatas(init).map((item, index) => (
           <>
           <option key={index} value={item}>{item}</option>
            </>
          ))}
        </select>
        </div>
        </div>

        </div>
        <div>
        <h4 style={{margin:"10px 0px"}}>Special Requests:</h4>
        <textarea style={{width:"350px",height:"90px"}} type="text"/>
        </div>
    </div>
    <div  className="pay-option">
      <h1>Payment Options</h1>
      <p>you can pay your payment in one of your choice below</p>
      <hr></hr>
      <div className="pay-img-container">
      {
        pay.map((item,index)=>{
          return(<div key={index}>
            <img src={item.img} alt="PayPal"/>
         </div>)
        })
          
      }
      </div>
    </div>
      </div>
      <div className="back-navigation">
       <button className="back-btn" onClick={backHandler}><i className="bi bi-arrow-left-short"></i>Back</button>
       <button className="submit-btn">Submit</button>
      </div>
    </div>
    
    <Footer/>
    </div>
    
  );
};

export default FillForm;

















    
