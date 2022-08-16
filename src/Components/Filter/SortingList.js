import React from 'react';
import FilterPopularSearch from './FilterPopularSearch';
import FilterEmitRecMakeModels from './FilterEmitRecMakeModels';

const SoringList = ({getFilteredData, efficiencyMPG, emissionData}) => {

  return (
    <div className='sorting-container'>
     
      <ul className='sorting-items-ul'>
        <li className='sorting-items-li'>
          {/* <button >filter </button> */}
          <p> 60+ Vehicle Make, 1100+ Vehicle Models Search</p>
          <FilterPopularSearch getFilteredData={getFilteredData} efficiencyMPG={efficiencyMPG}/>
          <FilterEmitRecMakeModels getFilteredData={getFilteredData} efficiencyMPG={efficiencyMPG} emissionData={emissionData}/>
        </li>
      </ul>
    </div>
  )
}

export default SoringList;