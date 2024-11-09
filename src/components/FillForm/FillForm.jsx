import React, { useContext } from 'react';
import { AppContext } from '../Context';
import { busObj } from '../../assets/availableList.js';
import './FillForm.css';

const FillForm = () => {
  const { timeD, destination, busId } = useContext(AppContext);

  // Find the selected bus based on busId
  const selectedBus = busObj.find(item => busId === item.Id);

  return (
    <div className="FillForm-container">
      {selectedBus ? (
        <div key={selectedBus.Id}>
          <h1>{selectedBus.name}</h1>
          <img src={selectedBus.img} alt={selectedBus.name} />
          <p>Departure Time: {timeD}</p>
          <p>Destination: {destination}</p>
          <p>Bus ID: {busId}</p>
        </div>
      ) : (
        <p>No bus selected</p>
      )}
    </div>
  );
};

export default FillForm;
