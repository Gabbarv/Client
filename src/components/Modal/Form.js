import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Form({info,setShowVerify,setShowForm,setOpenModal,setShowlogin}){
  const notify = () => toast("Thanks For Your Response.We Will Contact You Soon");
    return (
        (setShowForm && <div className="modalContainer">
      
        <div className="titleCloseBtn bg-dark">
          <button
            onClick={() => {
                setOpenModal(false);
                setShowlogin(false);
            setShowVerify(false);
            setShowForm(false);
              
            }}
          >
            X
          </button>
        </div>
        <div className="form">
            <form onSubmit={(e) => {e.preventDefault();
                  notify();
                  setOpenModal(false);
                setShowlogin(false);
            setShowVerify(false);
            setShowForm(false);}}>
                <label>Full Name</label>
                <input type="text" placeholder="Enter Your Name" required/>
                <label>Mobile No</label>
                <input type="text" disabled/>
                <label>Email Address</label>
                <input type="email" placeholder="Enter Your Email" required/>
                <div className="choose-service">
                <label for="service">Choose a Service:</label><br/>
                <input type="text" value={info[0].title} disabled/>


<select name="service" id="service" required>
  <option value={info[0].s1}>{info[0].s1}</option>
  <option value={info[0].s2}>{info[0].s2}</option>
  <option value={info[0].s3}>{info[0].s3}</option>
  <option value={info[0].s4}>{info[0].s4}</option>
  <option value={info[0].s5}>{info[0].s5}</option>
</select>
                </div>
                
                <input className="btn bg-dark submit" type="submit" value="Submit"/>
            </form>
        </div>
        </div>)
    )

}
export default Form;