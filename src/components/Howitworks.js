import React from "react";
import select from "./images/select.png"
import verify from "./images/verify.png"
import submit from "./images/submit.png"


function Howitworks(){
    return (
        <>
          <div className="heading howitworks" data-aos="fade-up"
     data-aos-duration="1000">
              <h2>How it Works</h2>
              <span>Follow these steps to complete your service related query. </span>
          </div>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active howworksect">
        <div className="hw">
        <img src={select} className="howwork"/>
        </div>
        <h6>Step-01</h6>
        <h2>Choose Service</h2>
        <span>Click on the service you are looking for</span>
      
    </div>
    <div className="carousel-item howworksect">
        <div className="hw"> <img src={verify} className="howwork" /></div>
        <h6>Step-02</h6>
        <h2>Verify Mobile No</h2>
        <span>Verify your mobile no through otp</span>
   
    </div>
    <div className="carousel-item howworksect">
        <div className="hw"><img src={submit} className="howwork" /></div>
        <h6>Step-03</h6>
        <h2>Submit your query</h2>
        <span>Fill the form and submit your query we will contact you soon</span>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
          </>
    );
}

export default Howitworks;