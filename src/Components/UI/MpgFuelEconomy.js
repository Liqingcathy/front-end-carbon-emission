import React from "react";

const RecMission = ({ name, combined, city, highway, fuelCost, annualFuelConsump }) => {
  console.log(`combined ${combined}`);
  console.log(`city ${city}`);
  return (
    <div className='mission-container'>
      <h3>MPG fuel economy based on your vehicle CO2 emission</h3>
        <div className='recommendations'>
          <ul className="user-standard-comparison-ul">
            <li className='fuel-economy-user'>
              <p>your fuel economy {name}</p>
              <p>Real-World MPG {combined}</p>
              <p>Real-World MPG City {city}</p>
              <p>Real-World MPG Highway {highway}</p>
              <p>Annual Fuel Cost ${fuelCost}</p>
              <p>Annual Oil Consumption {annualFuelConsump} <br/>(unit:42 gallons)</p>
            </li>
            <li className='fuel-economy-standard'></li>
            <p>Real-World MPG standard 23 </p>
          </ul>
        </div>
    </div>
  );
};

export default RecMission;
