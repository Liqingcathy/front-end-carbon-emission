import React, {useState} from "react";
import car from '../../Assets/car.png'
import ReactPaginate from 'react-paginate';
import "./DisplayItems.css";

const SimilarModelDiffMake = ({sortingResult}) => {
  // console.log('inside of SameMakeDiffModel');
  // console.log(sortingResult.length);
  // const displaySameMakeDiffModel= () => {
  const [pageNumber, setPageNumber] = useState(0);

  const carPerPage = 10;
  const pagesVisited = pageNumber * carPerPage;
  
  const displayCars = () => 
     sortingResult
    .slice(pagesVisited, pagesVisited + carPerPage)
      .map((car) => {
        return <div className="car-result-container" key={car['id']}>
          <ul className='popular-search-ul'>
            <li className="car-icon"><img alt='car-icon' src={car}/></li>
              <li className="car-desc">
                <p>
                  <span>{car["_source"]["make"]}</span>
                  <span>{car["_source"]["model"]}</span>
                  <span>{car["_source"]["year"]}</span>
                </p>
                <p>
                  <span>{car["_source"]["combMPGSF"]}</span>
                  <span>{parseFloat(
                  car["_source"]["annualOilConsumption(42gallon)"]
                ).toFixed(2)}</span>
                </p>
              </li>
              </ul>
            </div>
        })
     



  const pageCount = Math.ceil(sortingResult.length / carPerPage);

  //react built in select page
  const changePage = ({selected}) => {
    setPageNumber(selected);
  }

  return (
    <div className="filter-result-display">
      {displayCars()} 
      <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtn"} 
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        />
    </div>
  )
   
}    
  
export default SimilarModelDiffMake;