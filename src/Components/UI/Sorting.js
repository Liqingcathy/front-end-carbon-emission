import React, {useState} from 'react';
// import Select from 'react-select';
import AsyncSelect from 'react-select/async'
import './Sorting.css';

const Sorting = ({getFilteredData}) => {
  const options = [
    {value: 'make_fuel_economy', label: 'make fuel economy'},
    {value: 'model_fuel_economy', label: 'model fuel economy' },
    {value: 'popular_search', label: 'popular search'},
    {value: 'tailpipe_emission', label : 'tailpipe emission'}
  ];


  const handleChange = (selectedOption) => {
    console.log("handleChange" , selectedOption);
    // setSortings(selectedOption);
    console.log(selectedOption[0]['value']);
    getFilteredData(selectedOption[0]['value']);
    
  };

  const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
      const filteredOptions = options.filter(option => option.label.toLowerCase()
      .includes(searchValue.toLowerCase())
      );
      console.log(`loadOptions ${JSON.stringify(searchValue)}, ${JSON.stringify(filteredOptions)}`)
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
        isSearchable 
        onChange={handleChange} />
      {/* <PopularSearch sameMakeFuelEconomy={sameMakeFuelEconomy}/> */}
    </div>

  )
}

export default Sorting;