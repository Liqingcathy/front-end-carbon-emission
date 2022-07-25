import React, { useState } from "react";
import './InputForm.css';

const inputData = {type:'', distance_unit:'', distance_value:0, vehicle_model_id:'' }

const InputForm = (props) => {
  //passed down userData
  const [userData, setInputData] = useState(inputData);
  
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
  }

  const handleInputSubmit = (event) => {
    event.preventDefault();
    props.handleInputSubmit(userData);//update userdata and lift up to app.js
  }

  return (
    <div>
      <form onSubmit={handleInputSubmit}>
        {/* <label>Zipcode</label> */}
        {/* <input type='text' /> <br/> */}
        <label>vehicle  type</label>
        <input 
          type='text' 
          required name='type'
          value={props.type}
          onChange={handleFormInput}
          /> <br/>
        <label>distance unit</label>
        <input 
          type='text' 
          required name='unit'
          value={props.distance_unit}
          placeholder="enter mi or km"
          onChange={handleFormInput} /><br/>
        <label>distance value</label>
        <input 
          type='text' 
          required name='value'
          value={props.distance_value} 
          onChange={handleFormInput}/><br/>
         <input className="button" type="submit" value="estimate" />
      </form>
    </div>
  )
}

export default InputForm;