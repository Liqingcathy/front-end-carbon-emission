const MpgResult = ({ name, year, trany, combined, city, highway, fuelCost, annualFuelConsumption }) => {
  console.log("inside of Mpg result");
  // console.log(`combined ${combined}`);
  // console.log(`city ${city}`);
  return (
      <div className='recommendmpations'>   
        <p>Your fuel economy <br />{name}({year} {trany})</p>
        <p>Real-World MPG Combined {combined}</p>
        <p>Real-World MPG City {city}</p>
        <p>Real-World MPG Highway {highway}</p>
        {/* <p>Gallon per 100 mile {gallonPerHundredMile}</p> */}
        <p>Annual Fuel Cost ${fuelCost}</p>
        <p>Annual Oil Consumption {annualFuelConsumption} <br/>(unit:42 gallons)</p>
</div>
  )
};
export default MpgResult;