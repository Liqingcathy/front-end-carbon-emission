// import React from "react";
// import "./RecMissionsList.css";
// import MpgFuelEconomy from "../Insight/MpgFuelEconomy";

// const RecMissionsList = ({ efficiencyMPG }) => {
  

//   const displayMissionsList = (res) => {
//     //return props.displaSearchRes.map((result) => {
//     return Object.entries(efficiencyMPG).map(([key, value]) => {
//       return (
//         <MpgFuelEconomy
//           key={value['_source']["model"]}
//           id={value['_source']["_id"]}
//           name={value['_source']["model"]}
//           year={value['_source']["year"]}
//           trany={value['_source']["trany"]}
//           combined={value['_source']["combMPGSF"]}
//           city={value['_source']["singleFuelMpgCity"]}
//           highway={value['_source']["highwayMPGSF"]}
//           // gallonPerHundredMile={parseFloat(100/value['_source']["combMPGSF"].toFixed(2))}
//           fuelCost={value['_source']["annualFuelCostSF($)"]}
//           costDrive25Mile={value['_source']["annualFuelCostSF($)"]/15000*25}
//           annualFuelConsump={value['_source']["annualOilConsumption(42gallon)"]}
//         />
//       );
//     });
//   };
  
 
//   return (
//     <div>
      
//         <ul className='result-list'>
//           <li>{displayMissionsList(efficiencyMPG)}</li>
//         </ul>
//     </div>
//   );
// };

// export default RecMissionsList;
