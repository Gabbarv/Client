import React from "react";
import "./Navbar.css";
import logo from "./../images/logo.png"
import {firebase} from "./../../firebase"





function Navbar({loggedIn,setLoggedin}){
  const logout = () => {
    firebase.auth().signOut().then(() => {
      
      setLoggedin(false);
      localStorage.setItem("user",false);
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
            <a className="nav-link" aria-current="page" href="#services">Our Services</a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact us</a>
          </li>
          <li className="nav-item">
           {loggedIn && <a onClick={logout} className="nav-link" href="#" >Logout</a> } 
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
 );
 

}

export default Navbar;