import React from "react";

const SearchResult = ({title, url}) => {
  console.log('inside of result item');
  // console.log(title);
  return (
    // <li className="search-result-item"> <a href={url} >{title}</a></li>
    <li className="search-result-item"> {title}</li>
  )
}

export default SearchResult;