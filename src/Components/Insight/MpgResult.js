// import './insightsSection.css';
const MpgResult = ({ name, year, make, trany, combined, city, highway, fuelCost, annualFuelConsumption,  gallonPerMile }) => {
  console.log("inside of Mpg result");
  // console.log(`combined ${combined}`);
  // console.log(`city ${city}`);


  return (
      <div className='insight-result-section-mpg'>   
        <p>Your vehicle <br />{make} {name} -{year} {trany} </p>
        <p>CO2 equiv.mpg {combined} vs standard 54(high)</p>
        <p>MPG City {city}  MPG Highway {highway}</p>
        <p>{gallonPerMile} gallon/100 mile </p>
        <p>Annual Fuel Cost ${fuelCost}</p>
        {/* <p>Annual Petroleum Consumption {annualFuelConsumption} <br/>(unit:42 gallons)</p> */}
  </div>
  )
};
export default MpgResult;