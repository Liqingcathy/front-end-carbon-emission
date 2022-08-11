import React from "react";
import './InputForm.css';

const DistanceFromTo = ({userData, setUserData}) => {
  return (
    <div className="user-name">
      <input type='text' 
             value={userData.user_name} 
             onChange={(event) => setUserData({...userData, user_name: event.target.value}) }
             />
             
    </div>)
}

export default DistanceFromTo;