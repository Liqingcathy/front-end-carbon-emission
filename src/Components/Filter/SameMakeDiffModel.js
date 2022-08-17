import React from "react";
import car from "../../Assets/car.png";
import "./DisplayItems.css";
import {FaCarSide} from "react-icons/fa";
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
          <FaCarSide className="car-icon" size={50} />
          <div className="car-text-container">
            <p className="title-h2">
              <span>{value["_source"]["make"]}</span>
              <span>{value["_source"]["model"]}</span>
              <span>{value["_source"]["year"]}</span>
            </p>
            <div className="car-desc-content">
            <div className="car-desc-ul">
            <p className="title-h3">
              <span>{value["_source"]["combMPGSF"]}g/mi mpg</span>
              <span>{value['_source']['singleFuelMpgCity']}</span>
              <span>{value['_source']['highwayMPGSF']}</span></p>
            </div>
            
            <div className="car-desc-ul">
            <p className="title-h3">
              <p>{value['_source']['trany']}</p>
              <p>size</p>
              <p>{value['_source']['VsizeClass']}</p>
              <p>s</p>
            {/* {value['_source']['fuelType1']} */}
            </p>
            </div>
            <div className="car-desc-ul">
            <p className="title-h3">
              <p>{value['_source']['annualFuelCostSF($)']}</p>
              <p>$ cost</p>
              <p>{parseFloat(
                value["_source"]["annualOilConsumption(42gallon)"]
              ).toFixed(2)}</p>
              <p>42 gallons</p>
            </p>
            </div>
            </div>
          </div>
        </ul>
      );
    });
  };
  
    return <div className='popular-search'>{displayCars()}</div>;
  };


export default SameMakeDiffModel;