import React from "react";
import InputForm from "../UI/InputForm";
import EstimateObject from "../UI/EstimateObject";
import Searchbar from "../search/Searchbar";
import Categories from "../UI/Categories";
import Sorting from "../Filter/Sorting";
import SortingDisplays from "../Filter/SortingDisplays";
import Footer from "../layout/Footer";
// import {SkeletonText} from '@chakra-ui/react';

const Home = ({userData, getEstimateData, emissionData, getSearchResult, getFuelEfficiencyInsight, efficiencyMPG, userInput, getFilteredData, sortingResult, selectedFilterVal}) => {
 
  return (
    <div>
      <Searchbar handleSearchSubmission={getSearchResult}/>
      <InputForm  handleFormSubmission={getEstimateData} />
      <EstimateObject  efficiencyMPG={efficiencyMPG} emissionData={emissionData} getFilteredData={getFilteredData} sortingResult={sortingResult} />
       {/* passing setEmissionData to Soring component from EstimatedObject*/}
      <Categories  userData={userData} emissionData={emissionData} efficiencyMPG={efficiencyMPG} getFuelEfficiencyInsight={getFuelEfficiencyInsight} userInput={userInput} />
      <Sorting getFilteredData={getFilteredData} efficiencyMPG={efficiencyMPG} emissionData={emissionData} /> 
      <SortingDisplays sortingResult={sortingResult} efficiencyMPG={efficiencyMPG} selectedFilterVal={selectedFilterVal} />
      <Footer />
    </div>
  )
}

export default Home;