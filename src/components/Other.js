import React, { useEffect, useState }  from "react";
import {firebase,auth,db} from "../firebase";
import { ToastContainer, toast } from 'react-toastify';

function Other({setOpenOther}){
    const [mobNo,setMobNo]=useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [requirement,setRequirement] = useState("");
    const notify = () => toast("Thanks For Your Response.We Will Contact You Soon");

    useEffect(() => {},[mobNo,name,email,requirement]);
    const handleSubmit = (e) => {
        e.preventDefault();
      
    
        db.collection("contacts")
          .add({
            name: name,
            email: email,
            mobileNo: mobNo,
            requirement: requirement
          })
          .then(() => {
            
            notify();
          })
          .catch((error) => {
            alert(error.message);
            
          });
    
        setName("");
        setEmail("");
        setMobNo("");
        setRequirement("");
        
      };
    return (
        <div className="modalBackground">
        <div className="modalContainer">
      
        <div className="titleCloseBtn bg-dark">
          <button
            onClick={() => {
                
              setOpenOther(false);
            }}
          >
            X
          </button>
        </div>
        <div className="form">
            <form onSubmit={(e) => {
            handleSubmit(e);
                }}>
                <label>Full Name</label>
                <input  onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter Your Name" required/>
                <label>Mobile No</label>
                <input  onChange={(e) => setMobNo(e.target.value)} value={mobNo} type="text" />
                <label>Email Address</label>
                <input  onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter Your Email" required/>
                <label for="otherrequirement">Enter Your Requirement:</label>

<textarea  onChange={(e) => setRequirement(e.target.value)} value={requirement} id="otherrequirement" name="w3review" rows="4" cols="68">

</textarea>
                <input className="btn bg-dark submit" type="submit" value="Submit"/>
            </form>
        </div>
        </div>
        </div>

    )
}

export default Other;