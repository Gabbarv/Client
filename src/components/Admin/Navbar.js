import React, { useEffect, useState } from "react";
import logo from "./../images/logo.png"
import {firebase} from "./../../firebase"




function Navbar({login,setlogin}){
   


   function signout(){
    firebase.auth().signOut().then(() => {
        localStorage.setItem("adminuser",false);
        setlogin(false);
      }).catch((error) => {
        // An error happened.
      });
   }
    

    return (
        <nav  className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className="logo" src={logo} /></a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
           
              <li className="nav-item">
               {login && <a onClick={signout} className="nav-link" href="#" >Logout</a>}
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar; 