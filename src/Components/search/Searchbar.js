import React, { useState } from "react";
import './Searchbar.css';
import { useNavigate } from "react-router-dom";
// const defaultSearch = {"title" : ""}
const Searchbar = (props) => {
  const [searchVal, setSearchVal] = useState("");
  console.log(searchVal);

let navigate = useNavigate();

const handleInputSubmission = (event) => {
  event.preventDefault();
  props.handleSearchSubmission(searchVal);//handle submit first
  navigate('/search') //redirect second
  // console.log('after form submission' , userData);
}
  return (
    <div className="search-bar">
      <hr></hr>
      <div >
       <form onSubmit={handleInputSubmission}>
        <input 
          className="search" 
          type="text" 
          placeholder=" 🔍 type keywords and press enter" 
          name="title"
          value={searchVal}
          onChange={(event) => {
            // event.preventDefault();
            setSearchVal( event.target.value);
          }}
          />
          {/* <input className="search-btn" type='submit' /> */}
          {/* <button className="search-btn" onClick={() => {navigate('/search')}} />
           */}
           {/* <button className="search-btn">search </button> */}
           
          </form> 
      </div>
      <div className="search-suggest">
        <p>{searchVal}</p>
        <p></p>
      </div>
    </div>
  )
}

export default Searchbar;