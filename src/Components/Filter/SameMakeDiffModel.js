import React from "react";

const SameMakeDiffModel = ({sortingResult}) => {
  // console.log('inside of SameMakeDiffModel');
  // console.log(sortingResult);
  // const displaySameMakeDiffModel= () => {
    return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Brand Name</th>
            <th>Model Name</th>
            <th>Model Year</th>
            <th>Combined MPG</th>
            <th>MPG City</th>
            <th>MPG Highway</th>
            <th>Trany</th>
            <th>Size Class</th>
            <th>Fuel Type</th>
            {/* <th>Annual Fuel Cost($)</th> */}
            <th>Annual Oil Consumption</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(sortingResult).map(( value) => {
            return (
              <tr>
                {/* <td> {value['id']}</td> */}
                <td>{value['_source']['make']}</td>
                <td>{value['_source']['model']}</td>
                <td>{value['_source']['year']}</td>
                <td>{value['_source']['combMPGSF']}</td>
                <td>{value['_source']['singleFuelMpgCity']}</td>
                <td>{value['_source']['highwayMPGSF']}</td>
                <td>{value['_source']['trany']}</td>
                <td>{value['_source']['VsizeClass']}</td>
                <td>{value['_source']['fuelType1']}</td>
                {/* <td>{value['_source']['annualFuelCostSF($)']}</td> */}
                <td>{parseFloat(value['_source']['annualOilConsumption(42gallon)']).toFixed(2)}</td>
              </tr>
          )})}
      </tbody>
    </table>
  </div>
  )
}    
  


export default SameMakeDiffModel;