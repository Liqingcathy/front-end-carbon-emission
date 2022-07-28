import React, { useState } from "react";
import './InputForm.css';

const DistanceUnit = ({userData, setUserData}) => {
  return (
    <div className="distance-unit">
      <input type='text' 
      value={userData.distance_unit} 
      onChange={(event) => setUserData({...userData, distance_unit: event.target.value})}/>
    </div>)
}

export default DistanceUnit;