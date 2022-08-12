import React, {useState} from 'react';
// import Select from 'react-select';
import AsyncSelect from 'react-select/async'
import './Sorting.css';

const Sorting = ({getFilteredData}) => {
  // console.log('inside of sortings component');
  // const [emission, setEmission] = useState([]);
  const options = [
    {value: 'same_make_diff_model', label: 'similar efficient models from your make based on your estimated emission'},
    {value: 'same_model_diff_make_model', label: 'similar efficient vehicle makes based on your emission' },
    {value: 'popular_vehicle_make_search', label: 'popular vehicle make search/estimate'},
    {value: 'popular_vehicle_model_search', label: 'popular vehicle model search/estimate'},
    {value: 'vehicle by tailpipe_emission', label : 'tailpipe emission'}
  ];


  const handleChange = (selectedOption) => {
    console.log("handleChange" , selectedOption);
    // setSortings(selectedOption);
    console.log(selectedOption[0]['value']);
    getFilteredData(selectedOption[0]['value']);
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
        isSearchable 
        onChange={handleChange} />
      {/* <PopularSearch sameMakeFuelEconomy={sameMakeFuelEconomy}/> */}
    
    </div>

  )
}

export default Sorting;