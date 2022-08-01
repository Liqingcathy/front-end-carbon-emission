import React, { useState } from "react";
import './Searchbar.css';
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
// const defaultSearch = {"title" : ""}
const Searchbar = (props) => {
  const [searchVal, setSearchVal] = useState("");
  console.log(searchVal);

let navigate = useNavigate();

const handleInputSubmission = (event) => {
  event.preventDefault();
  props.handleSearchSubmission(searchVal);//update userdata and lift up to app.js
  navigate('/search')
  // console.log('after form submission' , userData);
}
  return (
    <div>
      <hr></hr>
      <div >
       <form onSubmit={handleInputSubmission}>
        <input 
          className="search" 
          type="text" 
          placeholder=" 🔍 search..." 
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
           <button className="search-btn"  />
          </form> 
      </div>
    </div>
  )
}

export default Searchbar;