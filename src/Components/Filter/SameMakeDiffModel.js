import React from "react";

const SameMakeDiffModel = ({sortingResult}) => {
  console.log('inside of SameMakeDiffModel');
  // console.log(sortingResult);
  const displaySameMakeDiffModel= () => {
    return Object.values(sortingResult).map(( value) => {
      return (
          <tbody>
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
              <th>Annual Fuel Cost($)</th>
              <th>Annual Oil Consumption(42 gallon)</th>
            </tr>
            <tr key={value['id']}>
              <td>{value['_source']['make']}</td>
              <td>{value['_source']['model']}</td>
              <td>{value['_source']['year']}</td>
              <td>{value['_source']['combMPGSF']}</td>
              <td>{value['_source']['singleFuelMpgCity']}</td>
              <td>{value['_source']['highwayMPGSF']}</td>
              <td>{value['_source']['trany']}</td>
              <td>{value['_source']['VsizeClass']}</td>
              <td>{value['_source']['fuelType1']}</td>
              <td>{value['_source']['annualFuelCostSF($)']}</td>
              <td>{value['_source']['annualOilConsumption(42gallon)']}</td>
            </tr>
          </tbody>
      )
      }
    )
  }

  return (
    <div>
      {displaySameMakeDiffModel()}
    </div>
  )
}

export default SameMakeDiffModel;