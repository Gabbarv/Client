import React, { useEffect, useState } from "react";

import Card from "../Card/Card";
import "./Category.css";
import { ToastContainer, toast } from 'react-toastify';

import Navbar from "../Navbar/Navbar";
import Modal from "../Modal/Modal";
import Footer from "../Footer/Footer";
import services from "../../data";
import Carousel from 'react-elastic-carousel';
import other from "../images/other.jpg";
import Other from "../Other";
import Howitworks from "../Howitworks";
import accpressure from "../images/accupressure.jpg";
import Services from "../Service/Services";
import ServiceList from "../ServiceList";
import Loginmodal from "../Modal/Loginmodal";







function Construction(){
    const [serviceInfo,setServiceinfo] = useState({})
    const [showLogin,setShowlogin]= useState(false);
    const [itemName,setItemName]=useState("");
    const [loggedIn,setLoggedin]=useState(false);
   
    const user= localStorage.getItem("user");
    const [searchPlace,setSearchPlace]=useState("");
    const checksignin = () => {
      if(user==="true"){
        setLoggedin(true);
      }
    }
    
   useEffect(() => {
     checksignin();
       
   },[user]);
   
    return (
        <div className="back">
          <div className="top">
          <Navbar loggedIn={loggedIn} setLoggedin={setLoggedin} />
          <div className="about" data-aos="fade-up"
     data-aos-duration="1000"><h3>All types of services available.</h3>
          <p>we are the best services provider, currently operating in Bikaner only.</p>
          
          </div>
          <div className="Popular-s" data-aos="fade-up"
     data-aos-duration="1000">
            <h3>Most Popular</h3>
            <h4 onClick={() => {setItemName("Mehndi"); setShowlogin(true);}}>Mehndi</h4>
            <h4 onClick={() => {setItemName("Electrician"); setShowlogin(true);}}>Electrician</h4>
            <h4 onClick={() => {setItemName("Beautician"); setShowlogin(true);}}>Beautician</h4>
            <h4 onClick={() => {setItemName("RO Repair"); setShowlogin(true);}}>RO Repair</h4>
            <h4 onClick={() => {setItemName("AC Repair"); setShowlogin(true);}}>AC Repair</h4>
            <h4 onClick={() => {setItemName("Cooler Repair"); setShowlogin(true);}}>Cooler Repair</h4>
          </div>
          
          <ToastContainer/>
          </div>
         
          <ServiceList/>
           
             <div className="main">
       <div className="heading" data-aos="fade-up"
     data-aos-duration="1000" >
         <h2>Featured Services</h2>
         <span>What do you need to find?</span>
       </div>
      
       <div className="service-s">
           
           
       {services.map(service =>  <Services service = {service} loggedIn={loggedIn} setLoggedin={setLoggedin}/>)}
         
               
        
   
     
     </div>
 
       
        </div>
      
        {showLogin && <Loginmodal iname={itemName} loggedIn={loggedIn} setLoggedin={setLoggedin} setlogin={setShowlogin}/>}
        <Howitworks/>
        <Footer/>

        </div>
       
        
      
    
        
    )
}
export default Construction;