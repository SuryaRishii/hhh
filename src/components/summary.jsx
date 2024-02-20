import React from "react";

const Summary = (summ)=>{

return (
  <>
  <div className="container-fluid">
  <h1 style={{ textAlign: "center", backgroundColor: " lavender" ,color:'blue'}}>Summary </h1>
<ul className="list-group">
    <p className="list-group-item"> 
      {summ.summary}.</p></ul>
  </div>
  </>
);
}
export default Summary;