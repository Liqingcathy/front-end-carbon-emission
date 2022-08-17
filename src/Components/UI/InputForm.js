import React, { useState } from "react";
// import "./InputForm.css";
import "./DistanceFromTo.css";
import VehicleBrand from "./VehicleBrand";
import VehicleModel from "./VehicleModel";
import Year from "./Year";
// import DistanceValue from "./DistanceValue";
import DistanceFromToStyle from "./DistanceFromToStyle";

const defaultInputData = {
  // user_name: "",
  type: "vehicle",
  brand_name: "",
  model_name: "",
  year: 0,
  distance_unit: "mi",
  distance_value: 0,
  // frequency: 0,
  emission: 0,
  emission_per_mile: 0,
};

const InputForm = ({ handleFormSubmission, getFromToDistance }) => {
  //passed down userData
  const [inputData, setInputData] = useState(defaultInputData);
  const [page, setPages] = useState(0);
  
  const FormTitle = [
    "Estimate your vehicle's CO2 emission per trip or per week.",
    "Vehicle Brand",
    "Vehicle Model",
    "Vehicle Model Year"
  ];

  const pageDisplay = () => {
    if (page === 0) {
      return <DistanceFromToStyle userData={inputData} setUserData={setInputData}/>;
    } else if (page === 1) {
      return <VehicleBrand userData={inputData} setUserData={setInputData} />;
    } else if (page === 2) {
      return <VehicleModel userData={inputData} setUserData={setInputData} />;
    } else if (page === 3) {
      return <Year userData={inputData} setUserData={setInputData} />;
    // } else if (page === 4) {
    //   return <UserName userData={inputData} setUserData={setInputData} />;
    // } else if (page === 5) {
    //   return <Frequency userData={inputData} setUserData={setInputData} />;
    }
  };

  return (
    // <form onSubmit={handleInputSubmission}>
    <div className='inputform'>
      <div className='form-container'>
        <div className='header'>
          <h2>{FormTitle[page]}</h2>
        </div>
        <div className='body'>{pageDisplay()}</div>
        <div className='progressbar'>
          <div
            style={{
              width:
                page === 0
                  ? "16.7%"
                  : page === 1
                  ? "33.4%"
                  : page === 2
                  ? "50.1%"
                  : page === 3
                  ? "66.8%"
                  : page === 4
                  ? "83.5%"
                  : "100%",
            }}
          ></div>
        </div>
        <div className='footer'>
          <div className="footer-btn-sep1">
            <button
              className='prev-btn'
              disabled={page === 0}
              onClick={() => {
                setPages((currPage) => currPage - 1);
              }}
            >
             {"<< Prev"}
            </button>
          </div>
          <div className="footer-btn-sep2"> 
          <button
            className='next-btn'
            // disabled={page === FormTitle.length - 1}
            onClick={() => {
              if (page === FormTitle.length - 1) {
                alert("Form is submitted.");
                setInputData(inputData);
            
                handleFormSubmission(inputData);
              } else {
                setPages((currPage) => currPage + 1);
              }
            }}
          >
            
            {page === FormTitle.length - 1 ? "Submit" : "Next >>"}
          </button>
          </div>
          {/* >Next</button> */}
          {/* <button type="submit" value="Get Estimation Now">Submit</button> */}
        </div>
      </div>
    </div>
  );
};

export default InputForm;
