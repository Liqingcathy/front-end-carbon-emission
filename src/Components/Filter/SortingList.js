import React from 'react';
import FilterPopularSearch from './FilterPopularSearch';
import FilterEmitRecMakeModels from './FilterEmitRecMakeModels';
import './SoringList.css';
const SoringList = ({getFilteredData, efficiencyMPG, emissionData}) => {

  return (
    <div className='sorting-container'>
      <ul className='sorting-items-ul'>
        <li className='sorting-items-li'>
          {/* <button >filter </button> */}
          <p> 4000+ Vehicle Make, Models</p>
          <FilterPopularSearch getFilteredData={getFilteredData} efficiencyMPG={efficiencyMPG}/>
          <FilterEmitRecMakeModels getFilteredData={getFilteredData} efficiencyMPG={efficiencyMPG} emissionData={emissionData}/>
          <FilterPopularSearch getFilteredData={getFilteredData}/>
        </li>
      </ul>
    </div>
  )
}

export default SoringList;