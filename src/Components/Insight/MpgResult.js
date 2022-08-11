import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
// import './insightsSection.css';

const MpgResult = ({ name, year, make, trany, combined, city, highway, fuelCost, annualFuelConsumption,  gallonPerMile }) => {
  console.log("inside of Mpg result");
  // console.log(`combined ${combined}`);
  // console.log(`city ${city}`);
  const data = [
    {'name': 'mpg', 'mpg': combined}, 
    {'name': 'mpg-city','mpg': city}, 
    {'name': 'mpg-highway','mpg': highway}, 
    {'name': 'standard-mpg', 'mpg': 54}];
  
    
    return(
      <LineChart width={400} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="mpg" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
        // <p>Your vehicle <br />{make} {name} -{year} {trany} </p>
        // <p>CO2 equiv.mpg {combined} vs standard 54(high)</p>
        // <p>MPG City {city}  MPG Highway {highway}</p>
        // <p>{gallonPerMile} gallon/100 mile </p>
        // <p>Annual Fuel Cost ${fuelCost}</p> 
        // <p>Annual Petroleum Consumption {annualFuelConsumption} <br/>(unit:42 gallons)</p>
};
export default MpgResult;