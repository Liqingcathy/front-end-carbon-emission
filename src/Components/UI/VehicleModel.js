import React  from "react";
import "./InputForm.css";

const VehicleModel = ({ userData, setUserData }) => {
  return (
    <div className='brand-name'>
      <input
        type='text'
        value={userData.model_name}
        onChange={(event) =>
          setUserData({ ...userData, model_name: event.target.value })
        }
      />
    </div>
  );
};

export default VehicleModel;
