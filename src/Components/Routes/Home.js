import React from "react";
import InputForm from "../UI/InputForm";
import Result from "../UI/Result";
import MissionsRec from "../UI/MissionsRec";
import Searchbar from "../search/Searchbar";
const Home = ({getEstimateData, emissionData, getSearchResult}) => {
  return (
    <div>
    <Searchbar handleSearchSubmission={getSearchResult}/>
    <InputForm handleFormSubmission={getEstimateData} />
    <Result data={emissionData} />
    <MissionsRec />
    </div>
  )
}

export default Home;