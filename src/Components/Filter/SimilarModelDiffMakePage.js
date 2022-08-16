import React, {useState} from "react";
import caricon from '../../Assets/car.png'
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
        return <div id="cat-FOUR" className="car-result-container" key={car['id']}>
          <ul id="car-per-page" className='popular-search-ul'>
            <li className="car-icon"><img alt='car-icon' src={caricon}/></li>
              <li className="car-desc">
                <p className="title-h2">
                  <span>{car["_source"]["make"]}</span>
                  <span>{car["_source"]["model"]}</span>
                  <span>{car["_source"]["year"]}</span>
                </p>
                <p className="title-h3">
                  <span>{car["_source"]["combMPGSF"]}mpg</span>
                  <span>$ {parseFloat(
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
    <div id="cat-four" className="filter-result-display">
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