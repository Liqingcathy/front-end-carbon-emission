import React, { useState } from "react";
import './Searchbar.css';

const Searchbar = () => {
  const [searchVal, setSearchVal] = useState("");
  // console.log(searchVal);
  return (
    <div>
      <hr></hr>
      <div >
        <input 
          className="search" type="text" 
          placeholder=" 🔍 search vehicle type, carbon emission, fuel efficiency..." 
          onChange={(event) => {
            setSearchVal(event.target.value);
          }}
          />
        {/* <button className="search-btn">Search</button> */}
      </div>
    </div>
  )
}

export default Searchbar;