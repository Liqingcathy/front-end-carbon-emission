import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Subpage from "./Components/layout/Subpage";
import Search from "./Components/Routes/Search";
import Home from "./Components/Routes/Home";
import About from "./Components/Routes/About";
import Missions from "./Components/Routes/Missions";
import ErrorPage from "./Components/Routes/ErrorPage";
import axios from "axios";
import SearchResult from "./Components/search/SearchResult";

const API_URL = "http://127.0.0.1:5000";

function App() {
  const [userData, setUserData] = useState([]);
  const [emissionData, setEmissionData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

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
      console.log(`response data print ${JSON.stringify(response.data)}`);
      //{"_shards":{"failed":0,"skipped":0,"successful":1,"total":1},"hits":
      //{"hits":[],"max_score":null,"total":{"relation":"eq","value":0}},"timed_out":false,"took":4}
        if (response.data['hits']['hits'].length === 0){
          setSearchResults([]); //doesn't set to error mesg
        } else{
          setSearchResults(response.data['hits']['hits']);
          console.log(response.data['hits']['hits']); 
        }
    }).catch((error) => { console.log("error ", error);})
  }

return (
  <div className='App'>
    <Router>
     <Navbar />
      <Subpage /> 
        <Routes>
          <Route exact path='/' element={<Home getEstimateData={getEstimateData} emissionData={emissionData} getSearchResult={getSearchResult}/>} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/missions' element={<Missions/>} />
          <Route exact path='/search' element={<Search searchResults={searchResults} getSearchResult={getSearchResult}/>} />
        </Routes> 
    </Router> 
    
  </div>
);
}

export default App;
