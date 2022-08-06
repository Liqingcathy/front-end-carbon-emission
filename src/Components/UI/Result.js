import React from "react";
import './Result.css';

const Result = (props) => {
  const emissionResult = props.data
  console.log(emissionResult)
  return (
      <div className="result-container">
        <h2>Estimation Result</h2>
        <div className="emission-data">
        <span>Your car's estimated emission result is</span><br/>
          {
            Object.entries(emissionResult).map(([key, value])=>
              <div>{key} is {value}</div>
             )
          } 
          </div>
      </div>
  )
}

export default Result;