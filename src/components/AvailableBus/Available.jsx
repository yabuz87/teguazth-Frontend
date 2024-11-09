import React,{useContext} from 'react'
import {busObj }from "../../assets/availableList.js"
import { AppContext,AppProvider } from '../Context'
import  "./AvailableBus.css"
import { useNavigate } from 'react-router-dom';
const Available = () => {
  const navigate = useNavigate();
  const {init,setInit,timeD,setTime,destination,SetDestination}=useContext(AppContext);
   function handleNextPage()
   {
    navigate("/fillForm")
   }
   function handleBackpage()
   {
    navigate("/")
   }
  return (
  
    <div className="available-bus">
      <div >
        <h1>Available Buses</h1>
         <div className="available-container">
         {
    busObj.map((bus, index) => (
    <div key={index} className="available-bus-card">
      <div className="busImg-div"><img src={bus.img} alt={`${bus.name}`} /></div>
      <div><p>Name: {bus.name}</p>
      <p>Plate Number: {bus.plate_no}</p>
      <p>Location: {init}</p>
      <p>Destination: {destination}</p>
      <p>Date: {timeD}</p>
      </div>
    </div>
  ))
}

         </div>

  <div className="NavigationButton">
    <button className="prev-btn" onClick={handleBackpage}>Prevoius</button>
    <button className="next-btn" onClick={handleNextPage}>Next</button>

  </div>
      </div>

    
    </div>
  )
}

export default Available
