import React from "react";
import DistanceFromTo from "./DistanceFromTo";
import './InputForm.css';

const DistanceValue = ({userData, setUserData}) => {
  return (
    <div className="distance-val">
      <input type='text' 
             value={userData.distance_value} 
             onChange={(event) => setUserData({...userData, distance_value: event.target.value})}/>
      <p></p>
      <DistanceFromTo />
    </div>)
}

export default DistanceValue;