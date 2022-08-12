import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Subpage from "./Components/layout/Subpage";
import Search from "./Components/Routes/Search";
import Home from "./Components/Routes/Home";
import About from "./Components/Routes/About";
import Missions from "./Components/Routes/Missions";
import axios from "axios";
// const heroku_backend = "https://capstone-flask-server.herokuapp.com";
const heroku_backend = "http://localhost:5000"

function App() {
  const [userInput, setUserInput] = useState([]);
  const [userData, setUserData] = useState([]);
  const [emissionData, setEmissionData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [efficiencyMPG, setEfficiencyMPG] = useState([]);
  const [userDb, setUserDb] = useState([]);
  const [sortingResult, setSortingResult] = useState([]);


  // const [USHistoricalEmission, setUSHistoricalEmission] = useState([]);
  //API call to backend/db and return back to frontend to display estimation result
  const getEstimateData = (data) => {
    console.log("get estimate api call");
    setUserInput(data);
    axios
      .post(`${heroku_backend}/estimate`, data)
      .then((response) => {
        setUserData(response.data);
        console.log(response.data["data"]);
        console.log(response.data["data"]["attributes"]);
        const emissionVal = response.data["data"]["attributes"];
        setEmissionData(emissionVal);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  //currently not getting result due to some model name is missing in db
  const getFuelEfficiencyInsight = (modelYear) => {
    console.log("get getFuelEfficiencyInsight api call");
    // console.log(`before model name ${JSON.stringify(modelYear)}`);
    axios
      .put(`${heroku_backend}/user/models_efficiency/${modelYear}`)
      .then((response) => {
        console.log(`after model name ${JSON.stringify(response.data)}`);
        setEfficiencyMPG(response.data);
        
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  const getUserEmission = (user) => {
    console.log('inside of get user emission, user input from db');
    console.log(user);
    axios
    .get(`${heroku_backend}/user/${user}`)
    .then((response) => {
      console.log(`after getting user name ${JSON.stringify(response.data)}`);
      setUserDb(response.data);
      console.log(userDb);
    })
    .catch((error) => {
      console.log("error ", error);
    });
  }


  //get search result from backend db and post to search result component
  const getSearchResult = (keyword) => {
    console.log("get search result api call");
        axios
          .get(`${heroku_backend}/green_vehicle/${keyword}`) //send search keyword to flask/es
          .then((response) => {
            console.log(`2. get search result ${JSON.stringify(response.data)}`);
            //{"_shards":{"failed":0,"skipped":0,"successful":1,"total":1},"hits":
            //{"hits":[],"max_score":null,"total":{"relation":"eq","value":0}},"timed_out":false,"took":4}
            if (response.data["hits"]["hits"].length === 0) {
              setSearchResults([]); //doesn't set to error mesg
            } else {
              setSearchResults(response.data["hits"]["hits"]);
              console.log(response.data["hits"]["hits"]);
            }
          })
          .catch((error) => {
            console.log("error ", error);
          });
      };
  
  const getFilteredData = (selectOption, emissionData) => {
    console.log('inside of samke make fuel api call');
    if (selectOption === 'make_fuel_economy'){
      console.log(`emissionData['vehicle_make'] ${emissionData['vehicle_make']}`)
      axios.get(`${heroku_backend}/${selectOption}/${emissionData['vehicle_make']}`)
    }else if ( selectOption === 'model_fuel_economy'){
      axios.get(`${heroku_backend}/${selectOption}/${emissionData['vehicle_model']}`)
    }else {
      axios.get(`${heroku_backend}/${selectOption}`)
      .then((response) => {
        console.log(`same make fuel response from db ${JSON.stringify(response.data)}`)
        setSortingResult(response.data);
      })
      .catch((error) => {console.log('error', error)})
    }
  };

  // const dataUpToUserEmission = (userName) => {
  //   console.log('inside of get user emission and similar data from db');
  //   axios.get(`${heroku_backend}/${userName}`)
  //     .then((response) => {
  //       console.log(`same make fuel response from db ${JSON.stringify(response.data)}`)
  //       setSortingResult(response.data);
  //     })
  //     .catch((error) => {console.log('error', error)})

  // }

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Subpage />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Home
                userData={userData}
                getEstimateData={getEstimateData}
                emissionData={emissionData}
                getSearchResult={getSearchResult}
                getFuelEfficiencyInsight={getFuelEfficiencyInsight}
                efficiencyMPG={efficiencyMPG}
                getUserEmission={getUserEmission}
                setEmissionData={setEmissionData}
                userInput={userInput}
                userDb={userDb}
                getFilteredData={getFilteredData}
                sortingResult={sortingResult}
          
                
              />
            }
          />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/missions' element={<Missions />} />
          <Route
            exact
            path='/search'
            element={
              <Search
                searchResults={searchResults}
                getSearchResult={getSearchResult}
              />
            }
          />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
