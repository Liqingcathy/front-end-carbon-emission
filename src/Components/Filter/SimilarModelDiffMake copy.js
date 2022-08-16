import React, {useState} from "react";
import car from '../../Assets/car.png'
import ReactPaginate from 'react-paginate';
import "./SoringList.css";
import "./DisplayItems.css";

const SimilarModelDiffMake = ({sortingResult}) => {
  // console.log('inside of SameMakeDiffModel');
  // console.log(sortingResult.length);
  // const displaySameMakeDiffModel= () => {
  // const [cars, setCars] = useState(sortingResult.slice(0, 30));
  const [pageNumber, setPageNumber] = useState(0);

  const carPerPage = 5;
  const pagesVisited = pageNumber * carPerPage;
  
  // const displayCars = () => {
  //  sortingResult.slice(pagesVisited, pagesVisited + pagesVisited).map((car) => {
    return (
      <div className="car-result-top">
          {Object.values(sortingResult).map((value) => {
            return <div className="car-result-container" key={value['id']}>
               {/* <ul className="car-result-ul"> 
                 <li className="car-result-li"> */}
                    <img alt='car-icon' src={car} />
                    {/* <div className="car-text-container"> */}
                      <span>{value['_source']['make']}</span>
                      <span>{value['_source']['model']}</span>
                      <span>{value['_source']['combMPGSF']}</span>
                      <span>{value['_source']['year']}</span>
                      <span>{parseFloat(value['_source']['annualOilConsumption(42gallon)']).toFixed(2)}</span>
                   {/* </div> */}
                  {/* </li>
               </ul>  */}
            </div>
          }
          )}
  </div>
  )
 // })
//}

  // const pageCount = Math.ceil(sortingResult.length / carPerPage);

  // //react built in select page
  // const changePage = ({selected}) => {
  //   setPageNumber(selected);
  // }

  // return (
  //   <div className="filter-result-display">
  //     {displayCars()} 
  //     <ReactPaginate 
  //       previousLabel={"Previous"}
  //       nextLabel={"Next"}
  //       pageCount={pageCount}
  //       onPageChange={changePage}
  //       containerClassName={"paginationBtn"} 
  //       previousLinkClassName={"previousBtn"}
  //       nextLinkClassName={"nextBtn"}
  //       disabledClassName={"paginationDisabled"}
  //       activeClassName={"paginationActive"}
  //       />
  //   </div>
  // )
   
}    
  


export default SimilarModelDiffMake;