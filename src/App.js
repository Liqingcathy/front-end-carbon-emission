import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Subpage from "./Components/layout/Subpage";
import Searchbar from "./Components/search/Searchbar";
import InputForm from "./Components/UI/InputForm";
import Result from "./Components/UI/Result";
import MissionsRec from "./Components/UI/MissionsRec";
import SearchResultList from "./Components/search/SearchResultList";
import Search from "./Components/Routes/Search";
import Home from "./Components/Routes/Home";
import About from "./Components/Routes/About";
import Missions from "./Components/Routes/Missions";
import ErrorPage from "./Components/Routes/ErrorPage";
import axios from "axios";

const API_URL = "http://127.0.0.1:9000";

function App() {
  const [userData, setUserData] = useState([]);
  const [emissionData, setEmissionData] = useState([]);
  const [searchResults, setSearchResults] = useState("");

  //API call to backend/db and return back to frontend to display estimation result
  const getEstimateData = (data) => {
    console.log("get estimate api call");
    axios
      .post(`${API_URL}/estimate`, data)
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);

        const emissionVal = response.data["data"]["attributes"];
        setEmissionData(emissionVal);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  //get search result from backend db and post to search result component
  const getSearchResult = (keyword) => {
    console.log("get search result api call");
    axios.get(`${API_URL}/green_vehicle/${keyword}`) //send search keyword to flask/es
    .then((response) => {
      try{
        if (response.data['hits']['hits'].length === 0){
          setSearchResults('error'); //doesn't set to error mesg
        } else{
          setSearchResults(response.data['hits']['hits']);
          console.log(response.data['hits']['hits']); 
        }
      } catch (error) { //?work?
        setSearchResults(error); //display error is no result
      }
    }).catch((error) => { console.log("error ", error);})
  }

return (
  <div className='App'>
    <Navbar />
    <Subpage /> 
      {/* <Router>
      <Subpage /> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/missions" element={<Missions />}/>
          <Route path='*' element={<ErrorPage />} />
       </Routes>
      </Router>  */}
    
        {/* <Link to='/missions'> Missions </Link>  
        <Link to='/about'> About </Link>   */}
    <Router >
    <Searchbar handleSearchSubmission={getSearchResult}/>
    </Router>
    <SearchResultList displaSearchRes={searchResults}/>
      
      {/* </div></Routes>
      </Router> */}
    <InputForm handleFormSubmission={getEstimateData} />
    <Result data={emissionData} />
    <MissionsRec />
  </div>
);
}

export default App;
