import React from "react";
import car from "../../Assets/car.png";
import "./DisplayItems.css";

const SameMakeDiffModel = ({sortingResult}) => {
  // console.log('inside of SameMakeDiffModel');
  // console.log(sortingResult);
  // const displaySameMakeDiffModel= () => {
  const displayCars = () => {
    return Object.values(sortingResult).map((value) => {
      return (
        <ul className='popular-search-ul' key={value["id"]}>
          {/* <ul className="car-result-ul"> 
              <li className="car-result-li"> */}
          <img alt='car-icon' src={car} />
          <div className="car-text-container">
            <p className="title-h2">
              <span>{value["_source"]["make"]}</span>
              <span>{value["_source"]["model"]}</span>
              <span>{value["_source"]["year"]}</span>
            </p>
            <p className="title-h3">
              <span>{value["_source"]["combMPGSF"]}g/mi mpg</span>
              <span>{value['_source']['singleFuelMpgCity']}</span>
              <span>{value['_source']['highwayMPGSF']}</span></p>

            <p className="title-h3">
              <span>{value['_source']['trany']}size</span>
              <span>{value['_source']['VsizeClass']}</span>
            {/* {value['_source']['fuelType1']} */}
            </p>

            <p className="title-h3">
              <span>${value['_source']['annualFuelCostSF($)']}</span>
              <span>{parseFloat(
                value["_source"]["annualOilConsumption(42gallon)"]
              ).toFixed(2)}</span>
            </p>
          </div>
        </ul>
      );
    });
  };
  
    return <div className='popular-search'>{displayCars()}</div>;
  };


export default SameMakeDiffModel;