import React from "react";
import DistanceFromTo from "./DistanceFromTo";
import './InputForm.css';

const DistanceValue = ({userData, setUserData}) => {
  return (
    <div className="distance-val">
      <DistanceFromTo userData={userData} setUserData={setUserData} />
      <div className="approx-distance-wrap">
        <p>If no prefered places, enter weekly approximate miles of CO2 emission.</p>
        <input className="approx-distance"
            type='text' 
            value={userData.distance_value} 
            placeholder="approximate miles"
            onChange={(event) => setUserData({...userData, distance_value: event.target.value})}/>
        </div>
    </div>)
}

export default DistanceValue;