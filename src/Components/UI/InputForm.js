import React, { useState } from "react";
import "./InputForm.css";
import VehicleBrand from "./VehicleBrand";
import VehicleModel from "./VehicleModel";
import UserName from "./UserName";
import Year from "./Year";
import DistanceValue from "./DistanceValue";
import Frequency from "./Frequency";

const defaultInputData = {
  user_name: "",
  type: "vehicle",
  brand_name: "",
  model_name: "",
  year: 0,
  distance_unit: "mi",
  distance_value: 0,
  frequency: 0,
  emission: 0,
  emission_per_mile: 0,
};

const InputForm = ({ handleFormSubmission }) => {
  //passed down userData
  const [inputData, setInputData] = useState(defaultInputData);
  const [page, setPages] = useState(0);
  const FormTitle = [
    "User Name",
    "Vehicle Brand",
    "Vehicle Model",
    "Model Year",
    "Total miles planning to drive for this trip.",
    "Total number of times drive per week",
  ];

  //when user enters input value is changed, handles event
  // const handleFormInput = (event) => {
  //   const target = event.target;
  //   const name = target.name;
  //   const value = target.value;
  //   console.log(name, value)
  //   const newInputData = {...userData};
  //   //type, unit, value, model id update
  //   newInputData[name] = value;
  //   setInputData(newInputData);
  //   console.log('new input data', userData);
  // }

  const handleInputSubmission = (event) => {
    event.preventDefault();
    handleFormSubmission(inputData); //update userdata and lift up to app.js
    // console.log('after form submission' , userData);
  };

  const pageDisplay = () => {
    if (page === 0) {
      return <UserName userData={inputData} setUserData={setInputData} />;
    } else if (page === 1) {
      return <VehicleBrand userData={inputData} setUserData={setInputData} />;
    } else if (page === 2) {
      return <VehicleModel userData={inputData} setUserData={setInputData} />;
    } else if (page === 3) {
      return <Year userData={inputData} setUserData={setInputData} />;
    } else if (page === 4) {
      return <DistanceValue userData={inputData} setUserData={setInputData} />;
    } else if (page === 5) {
      return <Frequency userData={inputData} setUserData={setInputData} />;
    }
  };

  return (
    // <form onSubmit={handleInputSubmission}>
    <div className='inputform'>
      <div className='form-container'>
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
        <div className='header'>
          <h2>{FormTitle[page]}</h2>
        </div>
        <div className='body'>{pageDisplay()}</div>
        <div className='footer'>
          <button
            className='prev-btn'
            disabled={page === 0}
            onClick={() => {
              setPages((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
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
            {" "}
            {page === FormTitle.length - 1 ? "Submit" : "Next"}
          </button>
          {/* >Next</button> */}
          {/* <button type="submit" value="Get Estimation Now">Submit</button> */}
        </div>
      </div>
    </div>
  );
};

export default InputForm;
