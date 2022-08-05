import React, { useState } from "react";
import './InputForm.css';


const Year = ({userData, setUserData}) => {
  return (
    <div className="year">
      <input 
        value={userData.year} 
        onChange={(event) => setUserData({...userData, year: event.target.value})} />
        {/* <input value="year">year</input> */}
        {/* <option value="km">km</option> */}
     
    </div>)
}

export default Year;