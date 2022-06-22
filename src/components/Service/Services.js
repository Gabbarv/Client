import React from "react";
import Slide from "./Carousel";




function Services({service,loggedIn,setLoggedin}){
    return (
        <div className="service-info">
            <div className="service-name" data-aos="fade-up"
     data-aos-duration="1000">
                <h1>{service.title}</h1>
            </div>
            <div className="services" data-aos="fade-up"
     data-aos-duration="1000">
                <Slide items = {service.ser} loggedIn={loggedIn} setLoggedin={setLoggedin}/>
            </div>
        </div>
    )
}


export default Services;