import React, { useState } from "react";
import './Result.css';
const Result = (props) => {
 
  return (
      <div className="result-container">
        <h2>Estimation Result</h2>
        <div className="emission-data">
        <span>Your car's estimated emission result is</span> <br/>
        {props.data}</div>
      </div>
  )
}

export default Result;