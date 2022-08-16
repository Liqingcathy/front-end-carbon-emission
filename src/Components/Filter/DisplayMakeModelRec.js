import React from "react";
import SameMakeDiffModel from "./SameMakeDiffModel"
// import SimilarModelDiffMake from "./SimilarModelDiffMake";
import SimilarModelDiffMakePage from "./SimilarModelDiffMakePage";

const DisplayMakeModelRec = ({sortingResult, selectedFilterVal}) => {
  // console.log('inside of filter displays');
  // console.log('soring result');
  // console.log(sortingResult);

if (selectedFilterVal === "same_make_diff_model"){
  return <SameMakeDiffModel sortingResult={sortingResult} />

}else if (selectedFilterVal === "same_model_diff_make_model") {
  // return <SimilarModelDiffMake sortingResult={sortingResult}/>
  return <SimilarModelDiffMakePage sortingResult={sortingResult}/>
}
}

export default DisplayMakeModelRec;