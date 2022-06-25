import React, { useState } from "react";
import useWindowDimensions from "../Width";
import "./Service.css"
import Loginmodal from "../Modal/Loginmodal";




function Card({item,loggedIn,setLoggedin}){
    const [showLogin,setShowlogin]= useState(false);
  
    const { height, width } = useWindowDimensions();
    return (
        <>
      { width > 600 ? <div onClick={() => { setShowlogin(true)
    }} className="service-card-d">
       <img src={item.img}/>
       <p>{item.name}</p>
    </div> : <div  onClick={() => { setShowlogin(true)
    }} className="service-card-m">
        <img src={item.img}/>
        <p>{item.name}</p>
        </div>}
        {showLogin && <Loginmodal item={item} iname={item.name} loggedIn={loggedIn} setLoggedin={setLoggedin} setlogin={setShowlogin}/>}
      
        
    </>
    )
}


export default Card;