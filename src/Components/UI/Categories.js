import React, { useState } from "react";
import './Categories.css';

const Categories = () => {
  return (
    <div className="category-container">
      <ul className="category-items">
        <li>Same Makes, Different <br/> Models CO2 Emission<span><button>filter</button></span></li> 
        <li>Different Makes, <br/> Similar CO2 Emission</li>
        <li>Top 5 fuel-efficient vehicles</li>
       
        
      </ul>
      <ul className="category-items">
        <li>Driving Frequency Per Week</li>
        <li>Same Model MPG <br/> Fuel Economy</li>
        <li>Save Money  </li>
      </ul>
    </div>
  )
}

export default Categories;