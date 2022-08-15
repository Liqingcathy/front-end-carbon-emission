import React, {useState} from 'react';
// import Select from 'react-select';
import AsyncSelect from 'react-select/async'

const FilterPopularSearch = ({getFilteredData, efficiencyMPG}) => {
  // console.log('inside of sortings FilterPopularSearch');
  // console.log('efficient mpg');
  // console.log(efficiencyMPG);

  const options = [
    {value: 'popular_vehicle_make_search', label: 'popular vehicle make search/estimate'},
    {value: 'popular_vehicle_model_search', label: 'popular vehicle model search/estimate'},
  ];


  const handleChange = (selectedOption) => {
    console.log("handleChange" , selectedOption);
    // setSortings(selectedOption);
    console.log(selectedOption[0]['value']);
    getFilteredData(selectedOption[0]['value'], efficiencyMPG);
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

export default FilterPopularSearch;