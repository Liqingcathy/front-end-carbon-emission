import React, { useState } from "react";
import './InputForm.css';

const inputData = {type:'vehicle', brand_name: '', model_name: '', distance_unit:'', distance_value:0, vehicle_model_id:'' }

const InputForm = (props) => {
  //passed down userData
  const [userData, setInputData] = useState(inputData);
  const [page, setPages] = useState(0);
  const FormTitle = ['Vehicle Brand', 'Vehicle Model', 'Vehicle Model ID', 'Distance Unit', 'Distance Value'];

  //when user enters input value is changed, handles event
  const handleFormInput = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    console.log(name, value)
    const newInputData = {...userData};
    //type, unit, value, model id update
    newInputData[name] = value;
    setInputData(newInputData);
    console.log('new input data', userData);
  }

  // const handleNextStepInput = (event) => {
  //   event.preventDefault();
  //   props.handleVehicleMakesSubmit(userData.brand_name);
  //   setSteps(step + 1);
  //   console.log(step);
  // }

  // const handlePrevStepInput = (event) => {
  //   event.preventDefault();
  //   props.handleVehicleMakesSubmit(userData.brand_name);

  //   if(step !== 0){
  //     setSteps(step - 1);
  //     }
  // }

  
  const handleInputSubmission = (event) => {
    event.preventDefault();
    props.handleVehicleMakesSubmit(userData.brand_name);//update userdata and lift up to app.js
  }


  return (
    <div>
      <h1>{FormTitle[page]}</h1>
      <button>Prev</button>
      <button onClick={() => {setPages((currPage) => currPage + 1)}}>Next</button>
      {/* <form onSubmit={handleInputSubmission}> */}
      {/* <label>Vehicle Brand</label>
        <input 
          type='text' 
          required name='brand_name'
          value={props.brand_name}
          onChange={handleFormInput}
          /> <br/> */}
        {/* <button className="back" onClick={handlePrevStepInput}>prev</button> <br/>
        <button className="next" onClick={handleNextStepInput}>next</button> <br/> */}
      {/* <label>Vehicle Model</label>
        <input 
          type='text' 
          required name='type'
          value={props.model_name}
          onChange={handleFormInput}
          /> <br/> */}
        {/* <label>Vehicle Model ID</label>
        <input 
          type='text' 
          required name='value'
          value={props.vehicle_model_id} 
          onChange={handleFormInput}/><br/>
        <label>Vehicle Type</label>
        <input 
          type='text' 
          name='type'
          value={props.type}
          onChange={handleFormInput}
          /> <br/>
          <ul className='btn-ul'>
            <li><button className="back" onChange={handleNextStepInput}>back </button></li>
            <li><button className="next">next</button></li>
          </ul>
        <br/>  
        <label>Distance Unit</label>
        <input 
          type='text' 
          required name='unit'
          value={props.distance_unit}
          placeholder="enter mi or km"
          onChange={handleFormInput} /><br/>
        <label>Distance Value</label>
        <input 
          type='text' 
          required name='value'
          value={props.distance_value} 
          onChange={handleFormInput}/><br/> */}
         {/* <input className="btn-estimate" type="submit" value="Get Estimation Now" />
      </form>
    </div> */}
  </div>)
}

export default InputForm;