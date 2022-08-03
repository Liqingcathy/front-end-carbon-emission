import React, { useState } from "react";
import './InputForm.css';

const Frequency = ({userData, setUserData}) => {
  
  return (
    <div className="model-name">
      <input type='range' 
        min="0" max="30"
        name=""
        value={userData.frequency} 
             onChange={(event) => setUserData({...userData, frequency: event.target.value}) }
      />
      <output id="Output2">{userData.frequency}</output>
    </div>
    )
}

export default Frequency;