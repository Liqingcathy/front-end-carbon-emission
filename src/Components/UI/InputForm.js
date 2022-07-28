import React, { useState } from "react";
import './InputForm.css';
import Type from './Type';
import VehicleBrand from './VehicleBrand'
import VehicleModel from "./VehicleModel";
import UserName from "./UserName";
import DistanceUnit from "./DistanceUnit";
import DistanceValue from "./DistanceValue";


const inputData = {user_name: '', type:'vehicle', brand_name: '', model_name: '', distance_unit:'', distance_value: 0 }

const InputForm = (props) => {
  //passed down userData
  const [userData, setInputData] = useState(inputData);
  const [page, setPages] = useState(0);
  const FormTitle = ['User Name','Type', 'Vehicle Brand', 'Vehicle Model', 'Distance Unit', 'Distance Value'];

//when user enters input value is changed, handles event
// const handleFormInput = (event) => {
//   const target = event.target;
//   const name = target.name;
//   const value = target.value;
//   console.log(name, value)
//   const newInputData = {...userData};
//   //type, unit, value, model id update
//   newInputData[name] = value;
//   setInputData(newInputData);
//   console.log('new input data', userData);
// }

const handleInputSubmission = (event) => {
  event.preventDefault();
  props.handleFormSubmission(userData);//update userdata and lift up to app.js
  // console.log('after form submission' , userData);
}

const pageDisplay = () => {
  if (page === 0){
    return <UserName userData={userData} setUserData={setInputData} /> 
  }else if (page === 1){ //pass data props down to VehicleBrand component
    // eslint-disable-next-line no-undef
    return <Type/> 
  }else if (page === 2){
    return <VehicleBrand userData={userData} setUserData={setInputData} />
  }else if (page === 3){
    return <VehicleModel userData={userData} setUserData={setInputData}/>
  }else if (page === 4){
    return <DistanceUnit userData={userData} setUserData={setInputData}/>
  }else if (page === 5){
    return <DistanceValue userData={userData} setUserData={setInputData}/>
  }
}

return (
  // <form onSubmit={handleInputSubmission}>
  <div className="inputform">
    <div className="form-container">
      <div className="progressbar">
        <div style={
          {width: page === 0 ? "16.7%" : page === 1 ? "33.4%" : page === 2 
          ? "50.1%" : page === 3 ? "66.8%" : page === 4 ? "83.5%" : "100%"}}></div>
      </div>
      <div className="header">
        <h2>{FormTitle[page]}</h2>
        </div>
      <div className="body">{pageDisplay()}</div>
      <div className="footer">
        <button
          disabled={page === 0} 
          onClick={() => {setPages((currPage) => currPage - 1)}}>Prev</button>
        <button 
          // disabled={page === FormTitle.length - 1}
          onClick={() => {
            if (page === FormTitle.length - 1) {
              alert('Form is submitted.')
              setInputData(userData);
              console.log(userData);
              props.handleFormSubmission(userData);
            } else {
              setPages((currPage) => currPage + 1);
            }
            }}
            > {page === FormTitle.length - 1 ? "Submit" : "Next"}</button>
            {/* >Next</button> */}
            {/* <button type="submit" value="Get Estimation Now">Submit</button> */}
      </div>
    </div>
    </div>
  // </form>

//   <form onSubmit={handleInputSubmission} > 
//     <label>Vehicle Brand</label>
//       <input 
//         type='text' 
//         required name='brand_name'
//         value={props.brand_name}
//         onChange={handleFormInput}
//         /> <br/> 
//     <label>Vehicle Model</label>
//       <input 
//         type='text' 
//         required name='model_name'
//         value={props.model_name}
//         onChange={handleFormInput}
//         /> <br/>
//       <label>Vehicle Model ID</label>
//       <input 
//         type='text' 
//         name='model_id'
//         value={props.vehicle_model_id} 
//         onChange={handleFormInput}/><br/>
//       <label>Vehicle Type</label>
//       <input 
//         type='text' 
//         name='type'
//         value={props.type}
//         onChange={handleFormInput}
//         /> <br/>
//         <ul className='btn-ul'>
//         </ul>
//       <br/>  
//       <label>Distance Unit</label>
//       <input 
//         type='text' 
//         required name='distance_unit'
//         value={props.distance_unit}
//         placeholder="enter mi or km"
//         onChange={handleFormInput} /><br/>
//       <label>Distance Value</label>
//       <input 
//         type='text' 
//         required name='distance_value'
//         value={props.distance_value} 
//         onChange={handleFormInput}/><br/>
//       <input 
//         className="btn-estimate" 
//         type="submit" 
//         value="Get Estimation Now" 
//         />
// </form>
)
}

export default InputForm;