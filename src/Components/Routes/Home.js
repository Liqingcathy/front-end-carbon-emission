import React from "react";
import InputForm from "../UI/InputForm";
import EstimateObject from "../UI/EstimateObject";
import Searchbar from "../search/Searchbar";
import Categories from "../UI/Categories";

const Home = ({userData, getEstimateData, emissionData, getSearchResult, getFuelEfficiencyInsight, efficiencyMPG,getUserEmission, userInput, userDb, hasEmissionValue, getUSHistoricalEmission }) => {
  return (
    <div>
      <Searchbar handleSearchSubmission={getSearchResult}/>
      <InputForm  handleFormSubmission={getEstimateData}/>
      <EstimateObject  efficiencyMPG={efficiencyMPG} emissionData={emissionData} />
      <Categories  userData={userData} emissionData={emissionData} efficiencyMPG={efficiencyMPG} getFuelEfficiencyInsight={getFuelEfficiencyInsight} getUserEmission={getUserEmission} userInput={userInput} userDb={userDb} 
      getUSHistoricalEmission={getUSHistoricalEmission} />
      
      
    </div>
  )
}

export default Home;