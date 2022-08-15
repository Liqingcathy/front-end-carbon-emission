import React, {useState} from 'react';
// import Select from 'react-select';
import AsyncSelect from 'react-select/async'

const FilterEmitRecMakeModels = ({getFilteredData, efficiencyMPG, emissionData}) => {
  // console.log('inside of sortings component');
  // console.log('efficient mpg');
  // console.log(efficiencyMPG);
 


  const options = [
    {value: 'same_make_diff_model', label: 'similar efficient models from your make based on your estimated emission'},
    {value: 'same_model_diff_make_model', label: 'similar efficient vehicle makes based on your emission' },
    {value: 'vehicle by tailpipe_emission', label : 'tailpipe emission'}
  ];


  const handleChange = (selectedOption) => {
    console.log("handleChange" , selectedOption);
    // setSortings(selectedOption);
    console.log(selectedOption[0]['value']);
    getFilteredData(selectedOption[0]['value'], efficiencyMPG, emissionData);
  };


  // console.log(`emission ${emission}`);
  const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
      const filteredOptions = options.filter(option => option.label.toLowerCase()
      .includes(searchValue.toLowerCase())
      );
      // console.log(`loadOptions ${JSON.stringify(searchValue)}, ${JSON.stringify(filteredOptions)}`)
      callback(filteredOptions)
    }, 2000);
  };


  return (
    <div className='select-options-bar'>
      {/* <Select options={options} onChange={handleChange} isMulti/> */}
      <AsyncSelect 
        loadOptions={loadOptions} 
        defaultOptions
        isMulti
        // isSearchable 
        placeholder="popular"
        onChange={handleChange} />
      {/* <PopularSearch sameMakeFuelEconomy={sameMakeFuelEconomy}/> */}
    
    </div>

  )
}

export default FilterEmitRecMakeModels;