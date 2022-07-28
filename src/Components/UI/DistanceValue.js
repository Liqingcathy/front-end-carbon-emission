import React, { useState } from "react";
import './InputForm.css';

const DistanceValue = ({userData, setUserData}) => {
  return (
    <div className="distance-val">
      <input type='text' 
             value={userData.distance_value} 
             onChange={(event) => setUserData({...userData, distance_value: event.target.value})}/>
    </div>)
}

export default DistanceValue;