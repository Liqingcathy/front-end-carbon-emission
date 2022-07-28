import "./App.css";
import { useState } from "react";
import Navbar from "./Components/layout/Navbar";
import Header from "./Components/layout/Subpage";
import Searchbar from "./Components/search/Searchbar";
import InputForm from "./Components/UI/InputForm";
import Result from "./Components/UI/Result";
import Missions from "./Components/UI/Missions";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000";
// const defaultEmissionData = {
//       "Estimated Date": "",
//       "Vehicle Make": "",
//       "Vehicle Model":"",
//       "Vehicle Year": "",
//       "Carbon_g": null,
//       "Carbon_lb": null}
function App() {
  const [userData, setUserData] = useState([]);
  const [emissionData, setEmissionData] = useState([])
  // const [vehicleMakeName, setVehicleMakeName] = useState(''); //car brand
  // // const [vehicleMakeId, setVehicleMakeId] = useState('');
  // // const [vehicleModelId, setVehicleModelId] = useState('');
  // const [vehicleModelName, setVehicleModelName] = useState('');

  //API call to backend/db and return back to frontend to display estimation result
  const getEstimateData = (data) => {
    console.log("get estimate api call");
    axios
      .post(`${API_URL}/estimate`, data)
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);

        const emissionVal = response.data['data']['attributes']['carbon_g']
        
        // for (let data in response.data['data']['attributes']){
        //   console.log(response.data[data])
        //   newEmissionData.push(data)
        // }
        
        // newEmissionData['Estimated Date'] = response.data['estimated_at']
        // newEmissionData['Vehicle Make'] = response.data['vehicle_make']
        // newEmissionData['Vehicle Model'] = response.data['vehicle_model']
        // newEmissionData['Vehicle Year'] = response.data['vehicle_year']
        // newEmissionData['Carbon_g'] = response.data['carbon_g']
        // newEmissionData['Carbon_lb'] = response.data['carbon_lb']
        setEmissionData(emissionVal)

        // axios.get(`${API_URL}/estimate`)
        //      .then((response) => {
        //         console.log(response.data);})
        //      .catch((error) => {console.log('error ', error);})
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };
  //1.call vehicle make url get list of dict with vehile brand name
  // const getVehicleMakes = (brandName) => {
  //   console.log('inside of api func');
  //   axios.get(`${API_URL}/vehicle_makes`)
  //        .then((response) => {
  //         // console.log(response.data)
  //         for (let brand of response.data){
  //           // console.log(brand)
  //           if (brand['data']['attributes']['name'] === brandName){
  //               setVehicleMakeName(brandName);
  //               // setVehicleMakeId(brand['data']['id']);
  //           }
  //         }
  //         console.log('vehicleMakeName', vehicleMakeName);
  //         // console.log('vehicleMakeID', vehicleMakeId);

  //         axios.get(`${API_URL}/vehicle_makes/${vehicleMakeId}/vehicle_models`)
  //         .then((response) => {
  //           setVehicleModelName(response.data['data']['attributes']['name']);
  //           // setVehicleModelId(response.data['data']['id']);
  //         })
  //        })
  //        .catch((error) => {
  //         console.log('error detected', error);
  //        })
  // }

  // const getVehicleModels = (vehicleMakeId) => {
  //   axios.get(`${API_URL}/vehicle_makes/${vehicleMakeId}/vehicle_models`)
  //       .then((response) => {
  //         setVehicleModelName(response.data['data']['attributes']['name']);
  //         setVehicleModelId(response.data['data']['id']);
  //       })
  // }

  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Searchbar />
      <InputForm handleFormSubmission={getEstimateData} />
      <Result data={emissionData}/>
      <Missions />
    </div>
  );
}

export default App;
