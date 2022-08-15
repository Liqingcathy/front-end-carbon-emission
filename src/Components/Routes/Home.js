import React from "react";
import InputForm from "../UI/InputForm";
import EstimateObject from "../UI/EstimateObject";
import Searchbar from "../search/Searchbar";
import Categories from "../UI/Categories";
import Footer from "../layout/Footer";
import SoringList from "../Filter/SortingList";
import DisplayPopular from "../Filter/DisplayPopular";
import DisplayMakeModelRec from "../Filter/DisplayMakeModelRec";
import FilterButtons from "../Filter/FilterButtons";
const Home = ({userData, getEstimateData, emissionData, setEmissionData, getSearchResult, getFuelEfficiencyInsight, efficiencyMPG, userInput, getFilteredData, sortingResult, selectedFilterVal}) => {
 
  return (
    <div>
      
      {/* <Searchbar handleSearchSubmission={getSearchResult}/> */}
      <InputForm  handleFormSubmission={getEstimateData} />
      <EstimateObject  efficiencyMPG={efficiencyMPG} emissionData={emissionData} getFilteredData={getFilteredData} sortingResult={sortingResult} />
      <Categories  userData={userData} emissionData={emissionData} setEmissionData={setEmissionData} efficiencyMPG={efficiencyMPG} getFuelEfficiencyInsight={getFuelEfficiencyInsight} userInput={userInput} />
      <FilterButtons getFilteredData={getFilteredData} efficiencyMPG={efficiencyMPG} emissionData={emissionData} />
      {/* <SoringList getFilteredData={getFilteredData} efficiencyMPG={efficiencyMPG} emissionData={emissionData}/> */}
      <DisplayPopular sortingResult={sortingResult} efficiencyMPG={efficiencyMPG} selectedFilterVal={selectedFilterVal} />
      <DisplayMakeModelRec sortingResult={sortingResult} efficiencyMPG={efficiencyMPG} selectedFilterVal={selectedFilterVal} />
      
      <Footer />
    </div>
  )
}

export default Home;