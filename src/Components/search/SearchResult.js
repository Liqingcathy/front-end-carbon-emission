import React from "react";
import { Link} from "react-router-dom";

const SearchResult = ({title, url, content}) => {
  console.log('inside of result item');
  // console.log(title);
  return (
    // <li className="search-result-item"> <a href={url} >{title}</a></li>
    <ul className="search-result-items"> 
      {/* <li className="search-result-titles"> <Link to='{url}'>{title}</Link> </li> */}
      <li className="search-result-titles"> {url} {title} </li>
      <li className="search-result-content" > {content}</li>
    </ul>

  )
}

export default SearchResult;