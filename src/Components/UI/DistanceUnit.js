import React, { useState } from "react";
import './InputForm.css';


const DistanceUnit = ({userData, setUserData}) => {
  return (
    <div className="distance-unit">
      <select 
        value={userData.distance_unit} 
        onChange={(event) => setUserData({...userData, distance_unit: event.target.value})}>
        <option value="mi">mi</option>
        <option value="km">km</option>
     </select>
    </div>)
}

export default DistanceUnit;