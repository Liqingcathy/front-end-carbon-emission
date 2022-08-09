import React  from "react";
import './InputForm.css';

//need to validate input
//pass down from input form for update userInput
const VehicleBrand = ({userData, setUserData}) => {
  // console.log(userData)

  return (
    <div className="brand-name">
      <input type='text' 
        value={userData.brand_name} 
        onChange={(event) => 
        setUserData({...userData, brand_name: event.target.value})}
      />
    </div>
    )
}

export default VehicleBrand;