import React,{useContext} from 'react'
import { AppContext,AppProvider } from '../Context'
import { useNavigate } from 'react-router-dom';
const Available = () => {
  const navigate = useNavigate();
  const {init,setInit,timeD,setTime,destination,SetDestination}=useContext(AppContext);
   function handleNextPage()
   {
    navigate("/fillForm")
   }
  return (
  
    <div className="available-bus">
      <div>
        <h1>Available Buses</h1>

      </div>

      <div className="Bus-container">
      {/* <div>
        <img src{}>

        </img>
      </div> */}
      </div>
    
    </div>
  )
}

export default Available
