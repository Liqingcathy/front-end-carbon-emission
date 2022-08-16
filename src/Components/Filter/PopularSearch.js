import React from "react";
import {FaCarSide} from "react-icons/fa";

import "./DisplayItems.css";
const PopularModelSearch = ({sortingResult}) => {
  // console.log('inside of popular search');
  // console.log(sortingResult);
  // const top_5_models = sortingResult;
  // console.log(top_5_models);
  const displayPS = () => {
    return Object.values(sortingResult).map(( value) => {
      return (
        // <div className="popular-search-div">
          <ul className="popular-search-ul">
            {/* <li className="popular-search-li"> */}
              {/* {value['id']} */}
              <p className="icon-p"><FaCarSide className="car-icon" size={50}/></p>
              <h2 className="title-h2">
                <span>{value['_source']['brand_name']}</span>
                <span>{value['_source']['model_name']}</span>
              </h2>
              <div className="car-desc-content">
               <div className="car-desc-ul">
                <p className="data">{value['_source']['emission']}g </p>
                <p>emission</p> 
              </div> 
              <div className="car-desc-ul">
                <p className="data">{value['_source']['distance_value']}</p>
                <p>mile</p>
              </div>
              <div className="car-desc-ul">
                <p className="data">{value['_source']['emission_per_mile']}g</p>
                <p>per mile</p>
              </div>
            </div>
            {/* </li> */}
          </ul>
        // </div>
      )
      }
    )
  }


  return (
    <div className="popular-search">
    {displayPS()}
    </div>
  )
}

export default PopularModelSearch;