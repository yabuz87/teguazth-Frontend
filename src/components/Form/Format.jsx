import React, { useContext,useState} from 'react';
import { AppContext, AppProvider } from '../Context.jsx';
import {city} from '../../assets/city.js'; // Correct import for default export
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Format = () => {
  const {init,setInit,timeD,setTime,destination,setDestination}=useContext(AppContext);
  const navigate = useNavigate(); // Correctly initialize useNavigate inside the component

  const handleNextPage = () => {
    if (init === "" || destination === "") {
      alert("Please enter the Location and Destination");
    }
    else if(timeD==="")
    {
      alert("Please enter the Time");
    }
    else if
    (init === destination) {
      alert("Please enter different Location and Destination");
    }
     else {
      navigate('/avail');
    }
  };

  // const [init, setInit] = useState("");
  // const [timeD, setTime] = useState();
  // const [destination, setDestination] = useState(""); // Initialize with an empty string

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
    <div className="conta">
      <div className="form-input">
        <h1>Where do you wanna go?</h1>

        <div className="container">
          <div className="left-side">
            <div>from</div>
            <select onChange={(e)=>handleInit(e)}>
              <option value="">Select city</option> {/* Add value attribute to option */}
              {city.map((item, index) => (
                <option key={index} value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="right-side">
            <div>to</div>
            <select onChange={(e)=>handleDestination(e)}>
              <option value="">Select city</option> {/* Add value attribute to option */}
              {city.map((item, index) => (
                <option key={index} value={item.name}>{item.name}</option>
              ))}
            </select>
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
            <input type="date" value={timeD}/>
          </div>
        </div>

        <button className="btn m-4 p-2 btn-primary" onClick={handleNextPage}>
          Next <i className="bi bi-arrow-right-short"></i>
        </button>
      </div>
    </div>
  );
};

export default Format;
